import { NextRequest, NextResponse } from 'next/server';
import { storeMessage, validateMessage, LIMITS } from '@/lib/messages';

export const runtime = 'nodejs';

/**
 * Per-instance sliding window. Serverless means this resets on cold start and
 * is not shared across instances, so it is a speed bump for casual abuse, not
 * a real rate limiter. Upstash Redis is the upgrade if that ever matters.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages. Try again in a minute.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 });
  }

  const invalid = validateMessage(body);
  if (invalid) {
    return NextResponse.json({ error: invalid }, { status: 400 });
  }

  const { message, from } = body as { message: string; from?: string };

  try {
    const stored = await storeMessage({
      message: message.trim().slice(0, LIMITS.message),
      from: from?.trim().slice(0, LIMITS.from),
      referrer: request.headers.get('referer') ?? undefined,
      userAgent: request.headers.get('user-agent')?.slice(0, 300) ?? undefined,
    });

    return NextResponse.json({ ok: true, id: stored.id });
  } catch (err) {
    console.error('[message] store failed:', err);
    return NextResponse.json(
      { error: 'Could not save the message. Please email me instead.' },
      { status: 500 },
    );
  }
}

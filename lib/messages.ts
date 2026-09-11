import { put } from '@vercel/blob';

export interface IncomingMessage {
  message: string;
  from?: string;
  referrer?: string;
  userAgent?: string;
}

export interface StoredMessage extends IncomingMessage {
  id: string;
  createdAt: string;
}

export const LIMITS = {
  message: 2000,
  from: 200,
} as const;

/**
 * Where a message goes.
 *
 * Vercel's filesystem is ephemeral, so SQLite on disk would silently lose
 * everything on the next cold start. Blob is the least-setup durable option:
 * one auto-injected env var, no schema, one object per message.
 *
 * With no store provisioned the message is logged instead of dropped, so it is
 * still recoverable from the deployment logs while the store is being set up.
 */
export async function storeMessage(input: IncomingMessage): Promise<StoredMessage> {
  const stored: StoredMessage = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Date-prefixed so the blob listing sorts chronologically.
    const key = `messages/${stored.createdAt.slice(0, 10)}/${stored.id}.json`;
    // Private: these are messages strangers send in confidence. A public blob
    // URL is unguessable but still readable by anyone who obtains it, which is
    // the wrong default for someone's name, email and pitch.
    await put(key, JSON.stringify(stored, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    });
    return stored;
  }

  console.warn(
    '[message] No BLOB_READ_WRITE_TOKEN — logging instead of storing:',
    JSON.stringify(stored),
  );
  return stored;
}

/** Returns an error string when invalid, or null when the payload is fine. */
export function validateMessage(body: unknown): string | null {
  if (typeof body !== 'object' || body === null) return 'Malformed request.';

  const { message, from } = body as Record<string, unknown>;

  if (typeof message !== 'string' || message.trim().length === 0) {
    return 'Message cannot be empty.';
  }
  if (message.length > LIMITS.message) {
    return `Message is too long (max ${LIMITS.message} characters).`;
  }
  if (from !== undefined && (typeof from !== 'string' || from.length > LIMITS.from)) {
    return 'Contact detail is too long.';
  }
  return null;
}

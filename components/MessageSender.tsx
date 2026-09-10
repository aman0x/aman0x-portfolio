'use client';

import { useEffect, useRef, useState } from 'react';
import { profile } from '@/lib/profile';

type Status = 'sending' | 'sent' | 'error';

interface MessageSenderProps {
  message: string;
}

/**
 * Sends on mount and reports the outcome inline.
 *
 * Rendered once into terminal history, so the effect must not re-run: a resend
 * on every re-render would duplicate the message. The ref guards Strict Mode's
 * double-invoke in development too.
 */
export default function MessageSender({ message }: MessageSenderProps) {
  const [status, setStatus] = useState<Status>('sending');
  const [error, setError] = useState<string>('');
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/api/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        });
        const data = await res.json().catch(() => ({}));
        if (cancelled) return;

        if (res.ok) {
          setStatus('sent');
        } else {
          setStatus('error');
          setError(data?.error ?? 'Something went wrong.');
        }
      } catch {
        if (!cancelled) {
          setStatus('error');
          setError('Network error.');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [message]);

  return (
    <div className="space-y-2 text-sm">
      <p className="text-[var(--terminal-yellow)]">{'// Message'}</p>

      <div className="border-l pl-2" style={{ borderColor: 'var(--terminal-cyan)' }}>
        <p className="opacity-90 whitespace-pre-wrap break-words">{message}</p>
      </div>

      {status === 'sending' && (
        <p className="text-[var(--terminal-text)] opacity-60">
          <span className="cursor-blink">▋</span> sending…
        </p>
      )}

      {status === 'sent' && (
        <div className="space-y-1">
          <p className="text-[var(--terminal-green)]">✓ Delivered. Thanks — I read everything.</p>
          <p className="text-[var(--terminal-text)] opacity-50">
            Want a reply? Add your email:{' '}
            <span className="text-[var(--terminal-cyan)]">msg ... you@company.com</span>
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-1">
          <p className="text-[var(--terminal-red)]">✗ {error}</p>
          <p className="text-[var(--terminal-text)] opacity-60">
            Reach me directly at{' '}
            <a href={`mailto:${profile.email}`} className="text-[var(--terminal-cyan)]">
              {profile.email}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

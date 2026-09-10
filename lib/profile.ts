/**
 * Single source of truth for identity and contact details.
 *
 * These used to be repeated across commands, files and page metadata, which is
 * how a phone number ends up correct in one place and stale in three others.
 */
export const profile = {
  name: 'Aman Singh Chandel',
  handle: 'aman0x',
  title: 'Engineering Leader',
  subtitle: 'Full-Stack · Data Platforms · AI/ML',
  currentRole: 'Senior Full Stack Engineer',
  currentCompany: 'Cloudastra',
  formerTitle: 'ex-VP Technology',
  years: '11+',
  location: 'Delhi, India',
  email: 'amanchandel4@gmail.com',
  phone: '+91 7905400369',
  site: 'https://aman0x.com',
  github: 'https://github.com/aman0x',
  linkedin: 'https://linkedin.com/in/aman0x',
  openTo: 'Staff/Principal Engineer · Engineering Leadership · AI/ML Platform',
} as const;

/**
 * Builds a prefilled mailto. Chosen over a form on purpose: it needs no backend,
 * no third-party key and no data handling, and the sender keeps a copy in their
 * own sent folder. Swap for a POST to an API route if a CRM is ever added.
 */
export function buildMailto(message: string, subject?: string): string {
  const body = [
    message.trim(),
    '',
    '---',
    'Sent from aman0x.com',
  ].join('\n');

  const params = new URLSearchParams({
    subject: subject?.trim() || 'Hello from aman0x.com',
    body,
  });

  return `mailto:${profile.email}?${params.toString()}`;
}

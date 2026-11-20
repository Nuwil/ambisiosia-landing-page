import { NextResponse } from 'next/server';

const TOPICS = ['rent', 'buy', 'other'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fail = (error, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return fail('Invalid request.'); }
  if (body?.company) return NextResponse.json({ ok: true }); // honeypot filled: pretend success, drop it

  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const topic = String(body?.topic ?? 'other');
  const message = String(body?.message ?? '').trim();

  if (name.length < 2 || name.length > 120) return fail('Please enter your name.');
  if (!EMAIL.test(email) || email.length > 191) return fail('Please enter a valid email address.');
  if (!TOPICS.includes(topic)) return fail('Please choose a topic.');
  if (message.length < 10 || message.length > 2000) return fail('Please write a message of at least 10 characters.');

  const payload = { name, email, topic, message, receivedAt: new Date().toISOString() };
  const hook = process.env.INQUIRY_WEBHOOK_URL;

  if (!hook) {
    // Never silently lose real customer messages in production.
    if (process.env.NODE_ENV === 'production') return fail('Messages cannot be received right now. Please contact us directly.', 503);
    console.log('[inquiry] (set INQUIRY_WEBHOOK_URL to forward these)', payload);
    return NextResponse.json({ ok: true });
  }
  try {
    const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch (err) {
    console.error('[inquiry] forwarding failed', err.message);
    return fail('We could not send your message. Please try again later.', 502);
  }
  return NextResponse.json({ ok: true });
}

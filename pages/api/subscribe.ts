// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Resp = { ok: true } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = (req.body || {}) as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const to =
      process.env.SUBSCRIBE_TO ||
      process.env.RESEND_TO ||
      '';

    if (!to) {
      return res.status(500).json({ error: 'Falta la variable de entorno SUBSCRIBE_TO' });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'PapoomArt <no-reply@papoomart.pe>',
      to,
      subject: 'Nueva suscripción al club',
      text: `Nuevo suscriptor: ${email}`,
      // ✅ En SDKs que no aceptan `reply_to`, usa `replyTo`
      ...(email ? { replyTo: email } : {}),
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Resend error:', err); // ← para ver en logs de Vercel
    return res.status(500).json({ error: err?.message || 'Error enviando correo' });
  }
}

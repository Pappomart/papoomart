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

    // ✅ Validación de email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // ✅ A dónde enviar notificación de suscripción
    const to =
      process.env.SUBSCRIBE_TO ||
      process.env.RESEND_TO ||
      '';

    if (!to) {
      return res.status(500).json({
        error: 'Falta la variable SUBSCRIBE_TO en Vercel'
      });
    }

    // ✅ Enviar correo vía Resend
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM || 'PapoomArt <onboarding@resend.dev>',
      to,
      subject: 'Nueva suscripción al club',
      text: `Nuevo suscriptor: ${email}`,
      replyTo: email,
    });

    console.log('✅ Resend result:', result);

    if (result.error) {
      console.error('❌ Resend API error:', result.error);
      return res.status(500).json({ error: result.error.message });
    }

    return res.status(200).json({ ok: true });

  } catch (err: any) {
    console.error('❌ Resend internal error:', err);
    return res.status(500).json({
      error: err?.message || 'Error enviando correo'
    });
  }
}

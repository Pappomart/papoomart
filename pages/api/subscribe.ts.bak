// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Respuesta tipada
type Resp =
  | { ok: true }
  | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = (req.body || {}) as { email?: string };

    // Validación simple de email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // A quién le llega el aviso de nueva suscripción
    // (puede ser tu correo o una lista en Resend)
    const to =
      process.env.SUBSCRIBE_TO || // ej. "papoomartperu@gmail.com"
      process.env.RESEND_TO ||    // opcional
      '';

    if (!to) {
      return res
        .status(500)
        .json({ error: 'Falta la variable de entorno SUBSCRIBE_TO' });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'PapoomArt <no-reply@papoomart.app>',
      to,
      subject: 'Nueva suscripción al club',
      text: `Nuevo suscriptor: ${email}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: err?.message || 'Error enviando correo' });
  }
}

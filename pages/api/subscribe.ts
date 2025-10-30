// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Respuesta tipada
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

    // Validación simple de email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Destinatario (quién recibe la notificación)
    const TO =
      process.env.SUBSCRIBE_TO || // ej. "papoomartperu@gmail.com"
      process.env.RESEND_TO ||    // opcional
      '';

    if (!TO) {
      console.error('[subscribe] Falta SUBSCRIBE_TO');
      return res
        .status(500)
        .json({ error: 'Falta la variable de entorno SUBSCRIBE_TO' });
    }

    // Remitente: usa uno válido por defecto si aún no verificas dominio
    const FROM =
      process.env.RESEND_FROM || 'PapoomArt <onboarding@resend.dev>';

    // Enviar email con Resend
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: 'Nueva suscripción al club',
      text: `Nuevo suscriptor: ${email}`,
      reply_to: email, // así puedes responder directo al suscriptor
    });

    // Si Resend devolviera error sin lanzar excepción
    if ((result as any)?.error) {
      console.error('[subscribe] Resend error:', (result as any).error);
      return res
        .status(500)
        .json({ error: 'No se pudo enviar el correo (Resend)' });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('[subscribe] Exception:', err?.message || err);
    // Mensaje corto para el front; detalle queda en logs
    return res
      .status(500)
      .json({ error: 'Error enviando correo (ver logs en Vercel)' });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  try {
    const data = await resend.emails.send({
      from: "PapoomArt <noreply@papoomart.pe>",
      to: "papoomartperu@gmail.com",
      subject: "Nueva suscripción al club PapoomArt 🎀",
      html: `<p>Nuevo suscriptor: <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

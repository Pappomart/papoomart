// pages/api/donate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error:"Method not allowed" });

  const { amount, freq, email } = req.body || {};
  if (!amount || !email) return res.status(400).json({ error:"Faltan datos" });

  // TODO: integrar Culqi/MercadoPago/PayPal
  // Aquí crear intención de pago y devolver URL de checkout.
  // Por ahora, placeholder:
  return res.status(200).json({ ok:true, checkoutUrl: "/donar" });
}

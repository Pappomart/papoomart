
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Checkout stub.
 * Replace with integration to Culqi, Mercado Pago o PayPal.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  // TODO: Create preference (Mercado Pago) or charge (Culqi) with items from body
  return res.status(200).json({ ok: true, message: 'Checkout pendiente de integrar.' });
}

import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  // Aquí deberías agregar la moneda a la base de datos o mock
  const { name } = req.body;
  // Simulación de respuesta
  res.status(201).json({ id: Date.now(), name, status: 'en_wallet' });
}

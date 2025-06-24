import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  // Aquí deberías actualizar el estado de la moneda en la base de datos o mock
  const { id } = req.body;
  // Simulación de respuesta
  res.status(200).json({ id, status: 'en_comercio' });
}

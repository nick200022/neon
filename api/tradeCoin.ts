import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const { id } = req.body;
  // ...aquí deberías actualizar el estado de la moneda en la base de datos...
  res.status(200).json({ id, status: 'en_comercio' });
}
}

import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const { name } = req.body;
  // ...aquí deberías guardar la moneda en la base de datos...
  res.status(201).json({ id: Date.now(), name, status: 'en_wallet' });
}
}

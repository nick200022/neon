import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // ...aquí deberías obtener las monedas reales de la base de datos...
  const coins = [
    { id: 1, name: 'Bitcoin', status: 'en_wallet' },
    { id: 2, name: 'Ethereum', status: 'en_wallet' }
  ];
  res.status(200).json({ coins });
}

import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Aquí deberías obtener las monedas del usuario desde tu base de datos o mock
  const coins = [
    { id: 1, name: 'Bitcoin', status: 'en_wallet' },
    { id: 2, name: 'Ethereum', status: 'en_wallet' }
  ];
  res.status(200).json({ coins });
}

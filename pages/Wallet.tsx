import React, { useState } from "react";
import Navbar from "../components/Navbar";

const initialUserCryptos = [
  { name: "Bitcoin", symbol: "BTC", amount: 0 },
  { name: "Ethereum", symbol: "ETH", amount: 0 },
  { name: "Solana", symbol: "SOL", amount: 0 },
];

export default function Wallet() {
  const [userCryptos, setUserCryptos] = useState(initialUserCryptos);

  // Esta función se debe llamar cuando se comercia una moneda desde la bóveda
  const receiveCrypto = (symbol: string) => {
    setUserCryptos((prev) =>
      prev.map((crypto) =>
        crypto.symbol === symbol
          ? { ...crypto, amount: crypto.amount + 1 }
          : crypto
      )
    );
  };

  return (
    <div>
      <Navbar />
      <h2>Mi Billetera</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Símbolo</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {userCryptos.map((crypto) => (
            <tr key={crypto.symbol}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

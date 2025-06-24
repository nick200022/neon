import React, { useState } from "react";

const admin = true; // Simulación de autenticación de administrador

const initialVaultCryptos = [
  { name: "Bitcoin", symbol: "BTC", amount: 10 },
  { name: "Ethereum", symbol: "ETH", amount: 100 },
  { name: "Solana", symbol: "SOL", amount: 5000 },
];

export default function Vault({ onTrade }: { onTrade?: (crypto: any) => void }) {
  const [vaultCryptos, setVaultCryptos] = useState(initialVaultCryptos);

  const handleTrade = (symbol: string) => {
    setVaultCryptos((prev) =>
      prev.map((crypto) =>
        crypto.symbol === symbol && crypto.amount > 0
          ? { ...crypto, amount: crypto.amount - 1 }
          : crypto
      )
    );
    if (onTrade) {
      onTrade(symbol);
    }
  };

  if (!admin) {
    return <div>No tienes acceso a esta sección.</div>;
  }

  return (
    <div>
      <h2>Bóveda del Administrador</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Símbolo</th>
            <th>Cantidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {vaultCryptos.map((crypto) => (
            <tr key={crypto.symbol}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.amount}</td>
              <td>
                <button
                  disabled={crypto.amount === 0}
                  onClick={() => handleTrade(crypto.symbol)}
                >
                  Comerciar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Vault from "./vault";
import Wallet from "./Wallet";

const cryptocurrencies = [
  { name: "Bitcoin", symbol: "BTC", price: 67000 },
  { name: "Ethereum", symbol: "ETH", price: 3500 },
  { name: "Solana", symbol: "SOL", price: 150 },
];

export default function Home() {
  const walletRef = useRef<any>(null);

  const handleTrade = (symbol: string) => {
    if (walletRef.current && walletRef.current.receiveCrypto) {
      walletRef.current.receiveCrypto(symbol);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Plataforma de Criptomonedas</h1>
      <Vault onTrade={handleTrade} />
      <Wallet ref={walletRef} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Símbolo</th>
            <th>Precio (USD)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.symbol}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.price}</td>
              <td>
                <button>Comprar</button>
                <button>Vender</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

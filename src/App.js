import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// Dirección del contrato y ABI simplificado
const tokenAddress = "DIRECCION_DEL_CONTRATO";
const tokenABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function decimals() view returns (uint8)"
];

function App() {
  // Estados para almacenar nombre, símbolo, saldo y dirección
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Función para obtener nombre y símbolo del token
    const fetchData = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
      setName(await contract.name());
      setSymbol(await contract.symbol());
    };
    fetchData();
  }, []);

  // Función para manejar la comprobación de saldo
  const handleCheckBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
    const bal = await contract.balanceOf(address);
    const decimals = await contract.decimals();
    setBalance(ethers.utils.formatUnits(bal, decimals));
  };

  return (
    <div>
      <h1>{name} ({symbol})</h1>
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <button onClick={handleCheckBalance}>Ver saldo</button>
      <p>Saldo: {balance}</p>
    </div>
  );
}

export default App;
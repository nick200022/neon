# Instrucciones para desplegar el contrato MyToken

## 1. Instalar dependencias

```bash
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts
```

## 2. Crear el proyecto Hardhat

```bash
npx hardhat
# Selecciona "Crear un proyecto básico"
```

## 3. Configurar la red de pruebas

Edita `hardhat.config.js` y agrega la configuración de la red Goerli (o Sepolia):

```js
// ...existing code...
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url:"https://goerli.infura.io/v3/TU_INFURA_API_KEY",
      accounts: ["TU_LLAVE_PRIVADA"]
    } 
  }
};
```

## 4. Agregar el contrato

Copia el archivo `MyToken.sol` en `/workspaces/neon/contracts/`.

## 5. Crear el script de despliegue

Crea un archivo en `/workspaces/neon/scripts/deploy.js` con el siguiente contenido:

```js
// filepath: /workspaces/neon/scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Desplegando con la cuenta:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(1000000); // 1 millón de tokens

  await token.deployed();
  console.log("MyToken desplegado en:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## 6. Desplegar el contrato

```bash
npx hardhat run scripts/deploy.js --network goerli
```

Guarda la dirección que aparece en consola y colócala en tu frontend (`App.js`).

## 7. Despliegue automático con npm

Puedes automatizar el despliegue agregando un script en tu `package.json`:

```json
"scripts": {
  "deploy": "npx hardhat run scripts/deploy.js --network goerli"
}
```

Luego, simplemente ejecuta:

```bash
npm run deploy
```

Esto realizará el despliegue automáticamente en la red Goerli.

## 8. Publicar la aplicación web con una URL

Puedes desplegar tu frontend en Vercel para obtener una URL pública:

1. Asegúrate de tener una cuenta en https://vercel.com/.
2. Instala Vercel CLI (opcional):
   ```bash
   npm install -g vercel
   ```
3. En la carpeta de tu frontend (por ejemplo, `/workspaces/neon` o `/workspaces/neon/src` si ahí está tu React):
   ```bash
   npm run build
   vercel
   ```
4. Sigue las instrucciones en consola y Vercel te dará una URL pública para tu proyecto.

También puedes usar Netlify o GitHub Pages si lo prefieres.

## 9. Integración del token y frontend

- Usa el contrato `NeonToken.sol` en `/contracts` para desplegar tu token NEON.
- En el frontend (`index.html`, `style.css`, `app.js`), cambia `DIRECCION_DEL_CONTRATO` en `app.js` por la dirección real del contrato desplegado.
- Para el registro de usuarios y mensajería, puedes usar Firebase Authentication y Firestore. Debes agregar tu configuración de Firebase en `app.js`.
- La conexión de wallet y consulta de saldo ya está lista en el frontend.

### Ejemplo de flujo:
1. El usuario se registra con su correo (se guarda en Firebase).
2. Conecta su wallet MetaMask.
3. Puede ver su saldo de NEON y enviar mensajes a otros usuarios registrados.
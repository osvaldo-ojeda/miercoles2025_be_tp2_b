const fs = require("node:fs");

const leerArchivo = (ruta) => {
  const file = fs.readFileSync(ruta, "utf-8");
  console.log(`🚀 ~ leerArchivo ~ file:`, JSON.parse(file));
};

module.exports = leerArchivo;

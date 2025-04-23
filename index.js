// const saludar= require("./saludar.js")
// saludar()

// const fs = require('node:fs');
// console.log(`🚀 ~ fs:`, fs)

const leerArchivo= require("./fsSincronico/leerArchivo.js")

leerArchivo("./package.json")
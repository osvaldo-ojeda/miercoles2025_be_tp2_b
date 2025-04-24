// const saludar= require("./saludar.js")
// saludar()
// const {appendFile}= require('node:fs');
// // console.log(`🚀 ~ fs:`, fs.appendFile)
// console.log(`🚀 ~ appendFile:`, appendFile)
// const leerArchivo= require("./fsSincronico/leerArchivo.js")
// leerArchivo("./package.json")

const {
  crearDirectorio,
  crearArchivo,
  leerArchivo,
  agregarContenido,
  listarArchivos,
  eliminarArchivo,
} = require("./fsAsincronico/gestionDeArchivos.js");

// crearDirectorio("miDirectorio", "directorio creado");
// crearArchivo("./archivo.txt", "osvaldin")
// leerArchivo("./miDirectorio/archivo.tx")
// agregarContenido("./miDirectorio/archivo.txt", "osvaldin");
// listarArchivos(".");

eliminarArchivo("./miDirectorio/archivo.txt");
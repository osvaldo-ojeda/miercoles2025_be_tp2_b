// const fs = require("node:fs");
const {
  mkdir,
  writeFile,
  readFile,
  appendFile,
  readdir,
  unlink,
} = require("node:fs/promises");

const crearDirectorio = async (ruta, mensaje) => {
  try {
    //   await fs.promises.mkdir(ruta);
    await mkdir(ruta);
    console.log(mensaje);
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log(`El directorio ${ruta} ya existe`);
    } else {
      console.log(`🚀 ~ crearDirectorio ~ error:`, error.message);
    }
  }
};

const crearArchivo = async (ruta, mensaje) => {
  try {
    const file = await writeFile(ruta, mensaje);
    console.log(`🚀 ~ crearArchivo ~ file:`, file);
  } catch (error) {
    console.log(`🚀 ~ crearArchivo ~ error:`, error);
  }
};

const leerArchivo = async (ruta) => {
  try {
    const file = await readFile(ruta, "utf-8");
    console.log(`🚀 ~ leerArchivo ~ file:`, file);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`El archivo ${ruta} no existe`);
    } else {
      console.log(`🚀 ~ leerArchivo ~ error:`, error.message);
    }
  }
};

const agregarContenido = async (ruta, mensaje) => {
  try {
    const msn = `${mensaje}\n`;
    await appendFile(ruta, msn);
    console.log(`🚀 ~ agregarContenido ~ mensaje:`, msn);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`El archivo ${ruta} no existe`);
    } else {
      console.log(`🚀 ~ leerArchivo ~ error:`, error.message);
    }
  }
};

const listarArchivos = async (ruta) => {
  try {
    const data = await readdir(ruta);
    if (data.length === 0) {
      console.log(`El directorio ${ruta} está vacío`);
    }
    console.log(`🚀 ~ listarArchivos ~ data:`, data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`El directorio ${ruta} no existe`);
    } else {
      console.log(`🚀 ~ listarArchivos ~ error:`, error.message);
    }
  }
};
const eliminarArchivo = async (ruta) => {
  try {
    await unlink(ruta);
    console.log(`El archivo ${ruta} fue eliminado`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`El archivo ${ruta} no existe`);
    } else {
      console.log(`🚀 ~ eliminarArchivo ~ error:`, error.message);
    }
  }
};

module.exports = {
  crearDirectorio,
  crearArchivo,
  leerArchivo,
  agregarContenido,
  listarArchivos,
  eliminarArchivo,
};

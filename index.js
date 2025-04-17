// desestructuracion
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Ingeniero",
};

const texto = `Hola, soy ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.profesion} en ${persona.ciudad}.`;

// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;
// const profesion = persona.profesion;
// const texto2 = `Hola, soy ${nombre}, tengo ${edad} años y soy ${profesion} en ${ciudad}.`;
const { edad, ciudad, profesion, nombre, apellido } = persona;
const texto2 = `Hola, soy ${nombre}, tengo ${edad} años y soy ${profesion} en ${ciudad}.`;
const { nombre: nombre2 } = persona;
const array = [1, 2, 3, 4, 5];
const [valor1, valor2, valor3] = array;
// asincronismo

function inicio() {
  console.log("inicio");
}
function fin() {
  console.log("fin");
}

function time() {
  //   setTimeout(() => {
  console.log("time");
  //   });
}

function promesa(bolean) {
  return new Promise((resolve, reject) => {
    if (bolean) {
      resolve("promesa ok");
    } else {
      reject("promesa error");
    }
  });
}

const data = fetch("https://jsonplaceholder.typicode.com/todos/1");

// inicio();
// // console.log(promesa(true));
// // console.log(promesa(true).then(res=>res))
// data.then((res) => res.json()).then((info) => console.log(info)).catch((err) => console.log(err));

// promesa(false)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// //.finally(() => console.log("fin de la promesa"));
// // time();
// fin();

async function dataJson() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const info = await res.json();
    console.log(`🚀 ~ dataJson ~ info:`, info);
  } catch (error) {
    console.log(`🚀 ~ dataJson ~ error:`, error);
  }
}

dataJson();

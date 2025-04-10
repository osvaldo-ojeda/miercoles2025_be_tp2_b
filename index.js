// funciones

// function suma(a = 0, b = 0) {
//   // console.log(a+b);
//   return a + b;
// }

// console.log(suma(3))

function muchosParametros(...args) {
  console.log(`🚀 ~ muchosParametros ~ args:`, args);
  //     return args;
}
// muchosParametros(1,2,3,4,5,6,7,8,9,10)

// arrow function
// const arrow=()=>{}
// const arrow=param1=>{}
// const arrow=(param1, param2)=>{}
// const arrow=(param1, param2)=>param1+param2;
// console.log(`🚀 ~ arrow:`, arrow(2,4))

// const arrow = (param1, param2) => {
//   return param1 + param2;
// };
// console.log(`🚀 ~ arrow:`, arrow(2, 4));

// callback

function calculadora(a, b, op) {
  return op(a, b);
}

function sumar(a, b) {
  console.log("🚀 ~ sumar ", a + b);
}

// calculadora(2, 3, sumar);

// calculadora(4, 5, function (a, b) {
//   console.log("🚀 ~ calculadora ~ function ", a - b);
// });

// calculadora(4, 5, (a, b) => {
//   console.log("🚀 ~ calculadora ~ function ", a * b);
// });

// closure
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

// const contador1 = crearContador();
// console.log(`🚀 ~ contador1:`, contador1())
// console.log(`🚀 ~ contador1:`, contador1())
// console.log(`🚀 ~ contador1:`, contador1())

let num = 0;
// console.log(`🚀 ~ num:`, num)
function incrementar(numero) {
  numero++;
  return numero;
}
// console.log(`🚀 ~ incrementar ~ incrementar:`, incrementar(num))
// console.log(`🚀 ~ num:`, num)

// const data={
//      nombre: "Juan",
//      edad: 30,
//      ciudad: "Madrid",
// }

// console.log(`🚀 ~ data:`, data)
// function cambiarNombre(objeto, nuevoNombre){
//      objeto.nombre=nuevoNombre
//      return objeto
// }
// console.log(`🚀 ~ cambiarNombre ~ cambiarNombre:`, cambiarNombre(data, "Ricky"))
// console.log(`🚀 ~ data:`, data)

let n1 = 3;
let n2 = n1;
n2 = 20;
// console.log(`🚀 ~ n1:`, n1);

const data = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  estudios: {
    primaria: true,
    secundaria: true,
    universidad: false,
  },
  amigos: ["Pedro", "Maria", "Luis"],
  date: new Date(),
};

// const data2 = data;
// data2.ciudad = "Barcelona";
// console.log(`🚀 ~ data:`, data);

// copias superficiales
const data2 = { ...data };
data2.edad = 40;
// console.log(`🚀 ~ data2:`, data2);
// console.log(`🚀 ~ data:`, data);

// const data3 = {
//   nombre: data.nombre,
//   edad: data.edad,
//   ciudad: data.ciudad,
// };

// const data3={...data}
// data3.estudios.primaria = false;
// console.log(`🚀 ~ data:`, data.estudios)
// console.log(`🚀 ~ data3:`, data3.estudios)

// copias profundas

const data4 = {
  ...data,
  estudios: { ...data.estudios },
  //   amigos: [...data.amigos],
};

// data4.estudios.universidad = true;
// console.log(`🚀 ~ data4:`, data4.estudios);
// console.log(`🚀 ~ data:`, data.estudios)

// const data5=JSON.stringify(data)
// // console.log(`🚀 ~ data5:`, data5)
// const data6=JSON.parse(data5)
// // console.log(`🚀 ~ data6:`, data6)
const data6 = JSON.parse(JSON.stringify(data));
data6.amigos[0] = "Ricky";
// console.log(`🚀 ~ data:`, data.date)
// console.log(`🚀 ~ data6:`, data6.amigos)
// console.log(`🚀 ~ data6:`, data6.date)

const data7 = structuredClone(data);
data7.amigos[0] = "Ricky Martin";
// console.log(`🚀 ~ data7:`, data7.amigos)
// console.log(`🚀 ~ data:`, data.amigos)
// console.log(`🚀 ~ data7:`, data7.date)

// condicionales

// function edad(edad) {
//   if (edad >= 18) {
//     console.log("Eres mayor de edad");
//   } else if (edad < 0) {
//     console.log("Edad no valida");
//   } else {
//     console.log("Eres menor de edad");
//   }
// }

// function edad(edad) {
//   if (edad >= 18) console.log("Eres mayor de edad");
//   if ((edad > 0) & (edad < 18)) console.log("Eres menor de edad");
// }

// function edad(edad) {
//     edad >= 18 && console.log("Eres mayor de edad");
// //   edad >= 18 || console.log("Eres mayor de edad");
//   //   if ((edad > 0) & (edad < 18)) console.log("Eres menor de edad");
// }
// edad(20);
// edad(15);

let nombres = ["Juan", "Pedro", "Maria", "Luis"];
// let nombresUppercase=[];

// function up(nombres){
//      for (let index = 0; index < nombres.length; index++) {
//           const element = nombres[index]
//           nombresUppercase.push(element.toUpperCase())
//      }
// }
// up(nombres)
// console.log(`🚀 ~ nombresUppercase:`, nombresUppercase)

let nombressUppercase = nombres.map((elemento, index, array) => {
  //   console.log(`🚀 ~ index:`, index);
  //   console.log(`🚀 ~ nombressUppercase ~ array:`, array)
  return elemento.toUpperCase();
});
// console.log(`🚀 ~ nombressUppercase:`, nombressUppercase);
// console.log(`🚀 ~ nombres:`, nombres);

// ejercicio 2

const numeros = [10, 20, 30, 40, 50];
// console.log(`🚀 ~ numeros:`, numeros)
const inicio = 1;
const fin = 4;
//Resultado esperado : [20, 30, 40, 50]
// function obtenerSubArray(array, ini, fin) {
//      // return array.splice(ini, fin);
//      // return [...array].splice(ini, fin);
//      return structuredClone(array).splice(ini, fin);
// }
// // const obtenerSubArray=(array, ini, fin)=>[...array].splice(ini, fin)

function obtenerSubArray(array, ini, fin) {
  return array.slice(ini);
}
// console.log(`🚀 ~ obtenerSubArray:`, obtenerSubArray(numeros, inicio, fin))
// console.log(`🚀 ~ numeros:`, numeros)

// ejercicio 3
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filtrarPares(array) {
  return array.filter((element) => element % 2 === 0);
}
// console.log(`🚀 ~ filtrarPares:`, filtrarPares(numeros2))
// console.log(`🚀 ~ numeros2:`, numeros2)

// ejercicio 4
const numeros3 = [10, 20, 30, 40, 50];
//Resultado esperado : 150
function sumarTodos(array) {
  return array.reduce((acumulador, element) => {
    // console.log(`🚀 ~ returnarray.reduce ~ acumulador:`, acumulador)
    // console.log(`🚀 ~ returnarray.reduce ~ element:`, element)
    return acumulador + element;
  }, 0);
}
// console.log(`🚀 ~ numeros3:`, numeros3)
// console.log(`🚀 ~ sumarTodos:`, sumarTodos(numeros3))

// ejercicio 5

const productos = [
  { nombre: "manzanas", categoria: "frutas", precio: 2 },
  { nombre: "zanahorias", categoria: "verduras", precio: 1 },
  { nombre: "uvas", categoria: "frutas", precio: 3 },
  { nombre: "lechuga", categoria: "verduras", precio: 0.5 },
];
//Resultado esperado :
//    {
//      frutas: ["manzanas", "uvas"],
//      verduras: ["zanahorias", "lechuga"]
//    }
function agruparPorCategoria(array) {
  return array.reduce((acumulador, element) => {
    if (!acumulador[element.categoria]) {
      acumulador[element.categoria] = [element.nombre];
    } else {
      acumulador[element.categoria].push(element.nombre);
    }
    return acumulador;
  }, {});
}
console.log(`🚀 ~ agruparPorCategoria:`, agruparPorCategoria(productos));

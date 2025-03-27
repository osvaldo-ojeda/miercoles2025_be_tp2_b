// variables y constantes
// nombre
//  nombre= "osval"
// var nombre= "juan"
// nombre= "pepe"
// console.log(`🚀 ~ nombre:`, nombre)

// let nombre = "osval"
// // let nombre ="Pepe"
// nombre = "juan"
// console.log(`🚀 ~ nombre:`, nombre)

const apellido = "ojeda";
// const apellido = "osval"
// apellido="Fernandez"
console.log(`🚀 ~ apellido:`, apellido);


// tipos de datos
// datos primitivos
let str = "string";
console.log(`🚀 ~ str:`, typeof str);

let num = 2;
console.log(`🚀 ~ num:`, typeof num);

let bigInt = 1234567890123456789012345678901234567890n;
console.log(`🚀 ~ bigInt:`, typeof bigInt);

let bool = true;
console.log(`🚀 ~ bool:`, typeof bool);

let undefin;
console.log(`🚀 ~ undefin:`, typeof undefin);

let nul = null;
console.log(`🚀 ~ nul:`, typeof nul);

let symbol = Symbol("id");
console.log(`🚀 ~ symbol:`, typeof symbol);

let n1 = 1;
let n2 = 1;
console.log(`🚀 ~ n1:`, n1 === n2);

let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log(`🚀 ~ symbol1:`, symbol1 === symbol2);

// datos complejos
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(`🚀 ~ arr:`, typeof arr);
console.log(`🚀 ~ arr en  1:`, arr[1]);
arr[1] = 10;
console.log(`🚀 ~ arr en  1:`, arr[1]);

const obj = {
  nombre: "osval",
  apellido: "ojeda",
};
console.log(`🚀 ~ obj:`, typeof obj);
obj.edad=38
console.log(`🚀 ~ obj:`, obj.nombre);
console.log(`🚀 ~ obj:`, obj);


// metodos de strings
let str1 = "Hola Mundo_____";
console.log(`🚀 ~ str1:`, "Hola Mundo".length);
console.log(`🚀 ~ str1:`, str1.toUpperCase());

// funciones
saludar()
function saludar(){
     console.log(`🚀 ~ saludar ~ Hola Mundo:`)
     // return "Hola Mundo"
}

// console.log(`🚀 ~ saludar ~ saludar:`, saludar())

// arrow functions

const saludar2 = () => {
  console.log(`🚀 ~ saludar2 ~ Hola Mundo:`);
}    
saludar2()

// saludar2="hola"
console.log(`🚀 ~ saludar2:`, saludar2)

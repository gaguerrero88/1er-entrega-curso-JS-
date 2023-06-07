// CLASE 1

// // esta es la conexión a html
// console.log("esta conectado");

// // Variable inicializada

// // var prestamo="350";
// // var prestamo="300";

// // let prestamo="300";
// //  prestamo= "350";

// // let jhon;
// // const

// // //valores tipo numericos
// // const iva = 0.21;
// // let papa= 350;
// // // valores tipo string
// // let tomate="350"

// //Logica

// let numeroPregunta = prompt("Usuario decime un numero");
// let numeroPregunta2 = prompt("Usuario decime un numero 3");

// //vos al a variable numero y numero 2
// let numeroParseado = parseInt(numeroPregunta);
// let numeroParseado2 = parseInt(numeroPregunta2);

// let suma = numeroParseado + numeroParseado2;

// alert(suma);

// let numeroA = numeroPregunta;
// let numeroB = numeroPregunta2;
// let calculadora = numeroPregunta + numeroPregunta2;

// console.log("esta suma da" + calculadora);

// //concatenar variables

// alert("pasaste mas de 15 segudons se cierra");

// let numero = "26";
// let numero2 = "36";

// // estoy preguntando que tipo de valor

// typeof numero;

// let parseNumber = parseINT(numero);

// CLASE 2

// let usuarioNombre = prompt("digame tu nombre");
// let edad = parseINT(prompt("Decime tu edad"));

// if (usuarioNombre === "") {
//   alert("debes escribir un nombre");
// } else if (usuarioNombre === "Guille" && edad > 18) {
//   alert(`Bienvenido ${usuarioNombre}`);
// }

// for (let i = 0; i < 10; i++) {
//   alert(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Buzz");
//   } else if (i % 5 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
// //   }
// // }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     alert(i);
//     break;
//   }
// }

// let dia;
// let diaSemana;

// switch (dia) {
//   case 1:
//     diaSemana = "Lunes";
//     break;
//     case2:;
//     diaSemana = "Martes";
//     break;
//   default:
//     diaSemana = "Dia invalido";
// }

// Clase 5

//funcion constructora

class Gato {
  constructor(color, vidas, tamaño, alimento, edad, castrado, nombre) {
    this.color = color;
    this.vidas = vidas;
    this.tamaño = tamaño;
    this.alimento = alimento;
    this.edad = edad;
    this.castrado = castrado;
    this.nombre = nombre;
  }
}

const pantufla = new Gato(
  "blanco",
  7,
  "Grande",
  "Balanceado",
  "10 años",
  "Pantufla",
  false
);
const rucula = new Gato(
  "negro y blanco",
  10,
  "mediano",
  "pollo",
  "7 años",
  "rucula",
  true
);

for (const propiedades in rucula) {
  console.log(rucula.tamaño);
}

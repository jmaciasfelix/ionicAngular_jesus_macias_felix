//
// TODO 1
// Declarar en ES6 la clase Persona
//

/**
 * Esta clase representa un objeto Persona.
 */
class Persona {
  /**
   * Contructor del objeto Persona.
   * @param {string} name Nombre de la persona.
   * @param {string} age Edad de la persona.
   */
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  /**
   * Imprime por pantalla un saludo.
   */
  greet() {
    console.log(
      "Hi, my name is " + this._name + " and I'm " + this._age + " years old."
    );
  }
  /**
   * Aumenta la edad de la persona en uno.
   */
  haveABirthday() {
    this._age++;
  }
}

var p = new Persona("Posti", 34);

p.haveABirthday();
p.greet();

//
// TODO 2
// Crear un modulo que contenga una clase coche con dos atributos: make y km.
// El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
// También dispondría de dos métoodos: move(km) que incrementa los km según
// la cantidad y getInfo(), que devuelve un string con el make y el número de km
//

console.log("=== 2 ===");

import Coche from "./coche.js";

const cocheUno = new Coche("audi");
cocheUno.move(121);
console.log(cocheUno.getInfo());

//
// TODO 3
// Use funciones flecha en vez de las que se indican
//

console.log("=== 3 ===");

var array = [1, 2, 3];

array = array.map((el) => el * 2);

console.log(array);

//
// TODO 4
// Declare las variables convenientemente
//

console.log("=== 4 ===");

/* Solution */
const PI = 3.14;
function getCircleArea(r) {
  return PI * r * r;
}

//const getCircleArea = (r) => PI * r *r;

for (let i = 1; i <= 3; i++) {
  console.log("r = " + i + ", area = " + getCircleArea(i));
}

//
// TODO 5
// Simplifique este objeto usando sintaxis ES6
//

console.log("=== 5 ===");

var prop2 = "value2";

var object1 = {
  prop1: "value1",

  prop2,

  function1(param) {
    if (typeof param == "undefined") {
      param = 1;
    }
    console.log(param);
  },
};

console.log(object1.prop1);
console.log(object1.prop2);
object1.function1();

//
// TODO 6
// Simplifique estas asignaciones a variables usando sintaxis ES6
//

console.log("=== 6 ===");

var object2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
};

const { a, b, c, d, e, f } = object2;

console.log(a, b, c, d, e, f);

//
// TODO 7
// Simplifique las siguientes asignaciones usando el spread operator
//

console.log("=== 7 ===");

var a1 = [4, 5, 6, 7, 8, 9, 10];
var a2 = [0, 1, 2, 3];

a2 = [...a2, ...a1];

console.log(a2);

//
// TODO 8
// Convierta los siguientes bucles usando for of y for in
//

console.log("=== 8 ===");

var a3 = [0, 1, 2, 3, 4, 5];

for (const element of a3) {
  console.log(element);
}

var object3 = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in object3) {
  if (object3.hasOwnProperty(key)) {
    const elementKey = object3[key];
    console.log(`${key}: ${elementKey}`);
  }
}

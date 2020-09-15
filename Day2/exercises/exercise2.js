//
// TODO 1
// Declarar en ES6 la clase Persona
//

console.log('=== 1 ===');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hi, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
};

Person.prototype.haveABirthday = function() {
  this.age++;
};

var p = new Person('Posti', 34);

p.haveABirthday();
p.greet();

//
// TODO 2
// Crear un modulo que contenga una clase coche con dos atributos: make y km.
// El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
// También dispondría de dos métoodos: move(km) que incrementa los km según
// la cantidad y getInfo(), que devuelve un string con el make y el número de km
//

console.log('=== 2 ===');


//
// TODO 3
// Use funciones flecha en vez de las que se indican
//

console.log('=== 3 ===');

var array = [1, 2, 3];

array = array.map(function(x){
  return x * 2;
});

console.log(array);

//
// TODO 4
// Declare las variables convenientemente
//

console.log('=== 4 ===');

var PI = 3.14;

function getCircleArea(r) {
  return PI * r * r;
}

for(var i = 1; i <= 3; i++) {
  console.log('r = ' + i  + ', area = ' + getCircleArea(i));
}

//
// TODO 5
// Simplifique este objeto usando sintaxis ES6
//

console.log('=== 5 ===');

var prop2 = 'value2';

var object1 = {

  prop1: 'value1',

  prop2: prop2,

  function1: function(param) {

    if(typeof param == 'undefined') {
        param = 1;
    }

    console.log(param);
  }
};

console.log(object1.prop1);
console.log(object1.prop2);
object1.function1();

//
// TODO 6
// Simplifique estas asignaciones a variables usando sintaxis ES6
//

console.log('=== 6 ===');

var object2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

var a = object2.a;
var b = object2.b;
var c = object2.c;
var d = object2.d;
var e = object2.e;
var f = object2.f;

console.log(a, b, c, d, e, f);

//
// TODO 7
// Simplifique las siguientes asignaciones usando el spread operator
//

console.log('=== 7 ===');

var a1 = [4, 5, 6, 7, 8, 9, 10];

var a2 = [0, 1, 2, 3];

a1.forEach(function(x) {
  a2.push(x);
});

console.log(a2); 

//
// TODO 8
// Convierta los siguientes bucles usando for of y for in
//

console.log('=== 8 ===');

var a3 = [0, 1, 2, 3, 4, 5];

for(i = 0; i < a3.length; i++) {
  console.log(a3[i]);
}

var object3 = {
  a: 1,
  b: 2,
  c: 3
};

var objKeys = Object.keys(object3);

for(i = 0; i < objKeys.length; i++) {
  if(object3.hasOwnProperty(objKeys[i])) {
    console.log(objKeys[i] + ': ' + object3[objKeys[i]]);
  }
}

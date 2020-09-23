const users = require("./users.json");

//
// TODO 1
// Obtener el usuario cuyo teléfono es "024-648-3804"
//

console.log("=== 1 ===");

const numberPhone = "024-648-3804";
const user = users.find(({ phone }) => phone === numberPhone);
console.log(`El usuario con número de teléfono ${numberPhone} es:`);
console.log(user);

//
// TODO 2
// Crear una función que devuelva true si existe un usuario cuyo email
// sea el que se pasa como parámetro
//

console.log("=== 2 ===");
/**
 * Función que verifica si un usuario existe.
 * @param {string} email Email de un usuario
 * @returns {boolean} Existe un usuario
 */
const existsUser = (email) => {
  return users.some((user) => user.email === email);
};

console.log(existsUser("Nathan@yesenia.net")); // true
console.log(existsUser("japostigo@atsistemas.com")); // false

//
// TODO 3
// Obtener el número de usuarios que tienen website
//

console.log("=== 3 ===");

let numUserWebsite = 0;
users.forEach(({ website }) => (website ? numUserWebsite++ : null));
console.log(`Número de usuarios con website ${numUserWebsite}`);

//
// TODO 4
// Obtener el índice de la posición que toma en el array el primer usuario
// cuyo número de la calle de su dirección es menor que 300
//

console.log("=== 4 ===");

const indexUser = users.findIndex(({ address }) =>
  address ? address.number < 300 : null
);
console.log(
  `Número del índice del usuario cuyo número de la calle es menor a 300 es => ${indexUser}`
);

//
// TODO 5
// Obtener un array que sólo contenga las cadenas de los emails de los usuarios
//

console.log("=== 5 ===");

const emailsUsers = users.map(({ email }) => email);
console.log("Array con los emails de los usuarios ");
console.log(emailsUsers);

//
// TODO 6
// Obtener un array que contengan objetos {id: "id", username: "username"},
// que contienen los ids y los nombres de usuarios de los usuarios
//

console.log("=== 6 ===");

const usuarios = users.map(({ id, username }) => ({ id, username }));
console.log("Array con id y username de los usuarios");
console.log(usuarios);
//
// TODO 7
// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)
//

console.log("=== 7 ===");

let numberAddressUsers = [];
users.forEach(({ address }) => {
  address && numberAddressUsers.push(parseInt(address.number, 10));
});
console.log("Número de direcciones de los usuarios en formato número");
console.log(numberAddressUsers);

//
// TODO 8
// Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100
//

console.log("=== 8 ===");

/**
 * Función que verifica si un longitud esta entre un rango.
 * Default -100 < lng < 100
 * @param {string} lng Longitud de la dirección del usuario.
 * @param {number} lowLng  Cota inferior de la longitud, por defecto es -100
 * @param {number} highLng Cota superior de la longitud, por defecto es 100
 * @returns {boolean} Longitud cumple con rango.
 */
function checkLongitud({ lng }, lowLng = -100, highLng = 100) {
  const lngInt = parseInt(lng, 10);
  return lowLng < lngInt && lngInt < highLng;
}
/**
 * Función que verifica si un latitud esta entre un rango.
 * Default -50 < lat < 50
 * @param {string} lat Latitud de la dirección del usuario.
 * @param {number} lowlat Cota inferior de la latitud, por defecto es -50
 * @param {number} highLat Cota superior de la latitud, por defecto es 50
 * @returns {boolean} Latitud cumple con rango.
 */
function checkLatitud({ lat }, lowlat = -50, highLat = 50) {
  const latInt = parseInt(lat, 10);
  return lowlat < latInt && latInt < highLat;
}

console.log(
  "Usuarios cuya dirección está ubicada entre la latitud -50 y 50, y la longitud -100 y 100 "
);

const usersLatLong = users.filter(
  ({ address }) =>
    address !== undefined &&
    checkLatitud(address.geo) &&
    checkLongitud(address.geo)
);

console.log(usersLatLong);

//
// TODO 9
// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz
//

console.log("=== 9 ===");

let phoneUsersBiz = [];
users.forEach(
  (user) =>
    user.website &&
    user.website.endsWith(".biz") &&
    phoneUsersBiz.push(user.phone)
);
console.log(
  "Teléfonos de los usuarios cuyo website pertenecen a un dominio bizz"
);
console.log(phoneUsersBiz);

//
// TODO 10
// Escriba una función processArray que, dado un array de números
// enteros, devuelva un nuevo array en que aquellos elementos que
// sean pares se multipliquen por 2.
//
// ;)
//

console.log("=== 10 ===");

const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];

//const processArray = (a) => [];
/*
  const processArray = (a) => a.map((el) => (el % 2 === 0 ? el * 2 : el));
  console.log(processArray(testArray)); // [4,  3,  5, 12, 5,9, 20, 24, 13]
*/
/**
 * Función que dado un array de números enteros devuelve un nuevo array
 * donde aquellos elementos pares se han multiplicado por dos.
 * @param {number[]} a Lista de números enteros
 * @returns {number[]} Array de los números que se han multiplicado por dos.
 */
const processArray = (a) => {
  const array = [];
  a.forEach((el) => el % 2 === 0 && array.push(el * 2));
  return array;
};
console.log(processArray(testArray)); // [4, 12, 20, 24]

import books from './books';
import './index.scss';

// modulos
import { Casa } from './funciones';

const casa = new Casa(80);
console.log(casa);

// document.body.innerHTML += '<h1>Webpack demo</h1>';

console.log('Books', books);

//1. Transpilación: http://babeljs.io/repl/

//2. Declaración de clases (objetos)

class Animal {

    /**
     * constructor del animal
     *
     * @param {number} numPatas número de patas
     * @param {string} sonido sonido que hace
     */
    constructor(numPatas, sonido) {
        this.numPatas = numPatas;
        this.sonido = sonido;
    }

    /**
     * realiza el sonido
     *
     * @returns {string} sonido del animal
     */
    hazSonido() {
        return `Sonido: ${this.sonido}`;
    }
}

class Perro extends Animal {

    constructor(raza, nombre) {
        super(4, 'Ladrido');

        this.raza = raza;
        this.nombre = nombre;
    }

    ladra() {
        return 'Guaaau!';
    }
}

class Pajaro extends Animal {

    constructor(color) {
        super(2, 'Piar');

        this.color = color;
    }

    get plumaje() {
        console.log('obteniendo plumaje');
        return this.color;
    }

    set plumaje(color) {
        console.log('seteando plumaje')
        this.color = color;
    }
}

const perro = new Perro('Labrador', 'Pepe');
const pajaro = new Pajaro('Verde');

//3. Importación/exportación de módulos

//4. (var), const, let, windows.

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.innerHTML = i;
    div.classList.add('example-div');
    div.addEventListener('click', function () {
        // console.log(i);
    });
    document.body.appendChild(div);
}

let nombre = 'Pepe';
nombre = 'Francisco';

const edad = 10;

//5. Funciones flecha

const sayHello = function (nombre) {
    console.log('Hola ' + nombre);
}

const sayHelloArrow = nombre => console.log('Hola ' + nombre);
const sayHelloArrow2 = (nombre, edad) => console.log('Hola ' + nombre + ', edad: ' + edad);

const getName = () => 'Francisco';

const name = getName();
// console.log(name);

// sayHelloArrow('Fernando');
// sayHelloArrow2('Pepe', 20);

class Prueba {

    constructor(nombre) {
        this.nombre = nombre;
    }

    diElNombre() {
        setTimeout(() => console.log(this.nombre), 2000);
    }
}

// new Prueba('Pepe').diElNombre();

//6. Plantillas en cadenas (``), funcion includes

const nombre2 = 'Pepe';
const edad2 = 20;
const saludo = 'Hola ' + nombre2 + ', edad: ' + edad2;
const saludo2 = `Hola ${nombre2}, edad: ${edad}`;

const saludo3 = 'Hola\nNombre: ' + nombre2 + '\nEdad: ' + edad2;
const saludo4 = `
    <div>
        <h1></h1>
    </div>
`;

// console.log(saludo4);

//7. Valores por defecto en parámetros de funciones
const diHola = (edad, nombre = 'Felipe') => console.log(`Hola ${nombre}, edad: ${edad}`);
// diHola(20);

//8. Spread operator
const paco = {  // 0000001
    nombre: 'Paco',
    edad: 20
};

const coche = {
    marca: 'bmw',
    modelo: '320',
    edad: 30
};

const pacoCoche = {
    ...paco,
    ...coche
};

const edades = [1, 2, 3, 4, 5];
const numeros = [20, 50, 30];
const concatenacion = [...edades, ...numeros];

const usuario = {
    id: 1,
    username: 'loquesea',
    password: 'asdasdasd'
};

const { password, ...userWithoutPassword } = usuario;

const diHolaAMuchos = (...nombres) => console.log(`Hola ${nombres.join(', ')}`);
// diHolaAMuchos('Pepe', 'Juan', 'Felipe');
// console.log('asd', 'asda', 'asdas', 'asdasd')
// console.log(password, userWithoutPassword);

//9. Objetos literales:
//  - Simplificación propiedad-valor let a = {b, c: 'val'}
//  - Simplificación declaración de función

const nombrePersona = 'Juan';
const edadPersona = 22;

const personaX = {
    nombrePersona,
    edad: edadPersona,
    diHola() {
        console.log('hola');
    }
};

// personaX.diHola();

//10. Destructuración de arrays y objetos
const cocheBmw = {
    marca: 'bmw',
    modelo: '320',
    kms: 10000
};

const { marca, ...elResto } = cocheBmw;
// console.log(marca, elResto);

const personas = ['Pepe', 'Juan', 'Monica'];
const [pepe, ...elRestoDePersonas] = personas;
// console.log(pepe, elRestoDePersonas);

const diHolaOtraVez = ({ nombre }) => console.log(`Hola ${nombre}!`);
// diHolaOtraVez({ id: 1, nombre: 'Felipe', edad: 20 });

//11. Bucles for para iterar arrays (of) y claves de objetos (in)
//    Función forEach

for (let persona of personas) {
    // console.log(persona);
}

for (let key in cocheBmw) {
    // console.log(`${key}: ` + cocheBmw[key]);
}

//12. Programación funcional sobre arrays (find, findIndex, some, filter, map...)
const coches = [
    { marca: 'bmw', modelo: '320', kms: 1000 },
    { marca: 'audi', modelo: 'a5', kms: 20000 },
    { marca: 'renault', modelo: 'clio', kms: 49999 }
];

// coches.forEach((coche, index) => console.log(index, coche))
// coches.forEach(({ marca, kms }) => console.log(marca, kms));
const cochesConMilKMSmas = coches.map((coche, index) => ({ ...coche, kms: coche.kms + index }));
const cochesConMasDe5mil = coches.filter(coche => coche.kms > 5000);
const cocheAudiA5 = coches.find(coche => coche.marca === 'audi' && coche.modelo === 'a5');
const cocheRenaultClio = coches.findIndex(coche => coche.marca === 'renault' && coche.modelo === 'clio');
const todosTienenMasDe500 = coches.every(coche => coche.kms > 1000);
const unotiene50000 = coches.some(coche => coche.kms >= 50000);

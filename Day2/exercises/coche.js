/**
 * Esta clase representa un objeto Coche.
 */
export default class Coche{
    /**
     * Constructor de la clase Coche.
     * @param {string} make Marca del coche
     */
    constructor(make){
        this._make=make;
        this._km=0;
    }
    /**
     * El método move permite ampliar el número de km que tiene un coche.
     * @param {number} km Número de km a sumar.
     */
    move(km){
        this._km+=km;
    }
    /**
     * El método getInfo permite obtener información sobre los km y la marca del coche.
     * @returns {string} Cadena con el número de km y la marca del coche.
     */
    getInfo(){
        return `KMS: ${this._km} || MAKE: ${this._make}`
    }
}
// Variables
let numero: number = 5;
let texto: string = 'texto';
let bool: boolean = true;
let arr: Array<number> = [5,8,6.2,6]
 
// Funciones
function nombre (parametro: number): void {}
const f = (parametro: string): number => {
    return parametro.length
}

const f2 = (parametro: string): number => parametro.length

//objetos
let obj: {
    nombre: string,
    edad: number
} = {nombre: null, edad: null}

obj.edad = 5;

interface IPersona {
    nombre: string;
    edad: number; 
    telefono: number;
}

let persona: IPersona

// Clases

class Persona {
    public nombre: string 
    private _direccion: string 
    public numero: number

    public info = () => {
        return 'nombre' + this.nombre
    }

    constructor(nombre: string, numero: number) {
        this.nombre = nombre
        this.numero = numero
    }

    //public get direccion() {return this._direccion}; 

    
}

let persona2: Persona = new Persona('nombre', 5)
//persona2.direccion
persona2.info()

// Variables
var numero = 5;
var texto = 'texto';
var bool = true;
var arr = [5, 8, 6.2, 6];
// Funciones
function nombre(parametro) { }
var f = function (parametro) {
    
    return parametro.length;
};
var f2 = function (parametro) { return parametro.length; };
//objetos
var obj = { nombre: null, edad: null };
obj.edad = 5;
var persona;
// Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, numero) {
        var _this = this;
        this.info = function () {
            return 'nombre' + _this.nombre;
        };
        this.nombre = nombre;
        this.numero = numero;
    }
    return Persona;
}());
var persona2 = new Persona('nombre', 5);
//persona2.direccion
persona2.info();

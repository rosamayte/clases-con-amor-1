// Variables
let n = 5
n = "jkll"
let t = 'algo'
let b = true 
let v = null //(falso)
let arr = [1, 'a', 5.2, true, []]
let obj = {
    algo: 'valor',
    algo2: 5,
    obj2: {}, 
} //cualquier cosa dentro, formato jason, llave -> valor 
obj.nombre = 'algo1'      // los dos hacen lo mismo
obj['nombre'] = 'algo2'   // este es mejor para iterables 

// Funciones 
function nombre (a, b, c) {}  // parentesis = parametros ; llaves = codigo 
function parametroPredeterminado (obligatorio, predeterminado = true) {}

/*function prueba (p1, p2 = null) {
    if (!p2)
        console.log('no tengo p2')
    else 
        console.log('tengo p2')
}*/

//prueba(1)
//prueba(1, 2)

function prueba2 (texto) {
    return `recibi: ${texto}`
}

console.log(prueba2('njfknsd'))
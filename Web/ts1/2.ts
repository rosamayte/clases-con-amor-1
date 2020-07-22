// If
let buleano = true 

if (buleano) 
    console.log('t')

if (buleano){
    console.log('t')
} else {
    console.log('nt')
}

if (buleano) {
    console.log('t')
}else if (!buleano) 
    console.log('nt')

let n: number  = 5

switch (n) {
    case 1:
        console.log(1);
        break;
    case 3: 
        console.log('das');
        break;
    default:
        break;
}

// For

let arr: Array<number> = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}

// imprime llaves
for(const e in arr){
    console.log(arr[e], e);
}

// imprime valores
for(const e of arr){
    console.log(e);
}

let i: number = 0
while(i < 10){
    console.log(i);
    i++;
}

arr.forEach((x: number) => i + x)

const pares = arr.filter((x: number) => x % 2 == 0)

console.log(pares)


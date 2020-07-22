// If
var buleano = true;
if (buleano)
    console.log('t');
if (buleano) {
    console.log('t');
}
else {
    console.log('nt');
}
if (buleano) {
    console.log('t');
}
else if (!buleano)
    console.log('nt');
var n = 5;
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
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    console.log(arr[i_1]);
}
// imprime llaves
for (var e in arr) {
    console.log(arr[e], e);
}
// imprime valores
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var e = arr_1[_i];
    console.log(e);
}
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
arr.forEach(function (x) { return i + x; });
var pares = arr.filter(function (x) { return x % 2 == 0; });
console.log(pares);

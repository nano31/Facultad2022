let a = 1;
let b = true;
let c = "Hola";
let d = null;
let e;
let f = 2n ** 60n;
let g = new Date();
let h = [1,2,3,4];
let i = 'Hola';
let j = { x: 2.0, y: -3.6 };
let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);

/*Ejer 2*/
let nro = 25;
console.log(++nro); /*imprime 26*/
console.log(nro++); /*imprime 26*/
console.log(nro == '27'); /*imprime false*/ /*real imprime true*/
console.log(nro === '27'); /*imprime true*/ /*real imprime false*/

/*Ejer 3*/
function max(values) {
    return Math.max(values);
}
function min(values = []) {
    return Math.min(values);
}
function avg(values = []) {
    return values.reduce((total, value) => total + value);
}
function sum(values) {
    return 
}

const numeros = [10, 40, 20, 50];

console.log(max);

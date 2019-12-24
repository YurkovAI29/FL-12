let a = +prompt('enter a');
let b = +prompt('enter b');
let c = +prompt('enter c');
const f = 4;
const t = 2;
let d = b * b - f * a * c;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
}

if (d === 0) {
    let x = (-b + Math.sqrt(d)) / t * a;
    console.log('x =' + x);
} else if (d > 0 ) {
    let x1 = (-b + Math.sqrt(d)) / t * a;
    let x2 = (-b - Math.sqrt(d)) / t * a;
    console.log('x1 =' + x1);
    console.log('x2 =' + x2);
} else if (d < 0){
    console.log('no solution');
}


let numero1 = 5;
let numero2 = 15;
let pi = Math.PI;

console.log(pi);

console.log("a area é ${areacirculo (numero1)} cm²");

function areacirculo(raio = 1){
    console.log("função areacirculo - função declarada por bloco");
    return Math.PI * (raio ** 2);
}

const areaquadrado =function
(lado){
    console.log("função areaquadrado - função declarada por expressão");
    return lado**2;
}
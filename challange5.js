const prompt = require('prompt-sync')();

let num = Number(prompt("saisisez un nombre : "));
let x = 0
for (let i = 1 ; i <= num ; i++){
  x = x + i;
}
console.log(`Compteur total de 1 à ${num} = ${x}`)
const prompt = require('prompt-sync')();
let num = Number(prompt("enter le numero :"));
let affichage= "";
let result =0;
for (let i = 10; i >= 1; i--){
    result = num * i ;
    console.log(`${num} x ${i} = ${result}`);
    affichage = result ;
}
console.log(affichage);
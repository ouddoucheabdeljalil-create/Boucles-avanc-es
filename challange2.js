const prompt = require('prompt-sync')();
let num = Number(prompt("enter le numero :"));

let x = "" ;

for (let i = 1 ; i <= num ; i++){
  x =  " ";
 for( let j = 1 ; j<= num -i ;j++ ){ 
  x = x + " ";}
  for(let j = 1 ; j <= 2 * i -1 ; j++){
    x = x + "*"
  }
console.log(x );
}



const prompt = require('prompt-sync')();

let num = Number(prompt("saisisez un nombre : "));
if (num <= 1){
  console.log("error");
}
else{
  console.log(2)
  for(let j = 3 ; j < num ; j=j+2){
    console.log(j)
  }
}
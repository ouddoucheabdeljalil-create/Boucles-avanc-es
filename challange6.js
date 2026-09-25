const prompt = require('prompt-sync')();
let num = Number(prompt("saisissez le numero : "));
let arr =""
for (let i = 1 ; i <= num ; i++){
  for(let j =1; j <= num ;j++){
    if(j*i===num){
      arr = arr +" " + i
    }
  }
}
console.log(arr)
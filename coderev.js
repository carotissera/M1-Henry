'use strict';
​
function BinarioADecimal(num) { //'1100100' -> 100
   //0123456 posicion
   //1100100 -> der a izq 0010011 = 19
   //Sumatoria de 2^Posicion * Valor
   //2^0 = 1 * 1 resultado final = 1
   //2^1 = 2 * 1 resultado final = 2
   //2^2 = 4 * 0 resultado final = 0
   //2^3 = 8 * 0 resultado final = 0
   //2^4 = 16 * 1 resultado final = 16
   //2^5 = 32 * 0 resultado final = 0
   //2^6 = 64 * 0 resultado final = 0
                                   // 19
   //revisar que sea un string
   if (typeof num !== 'string') return console.log('El valor debe ser un string');
​
   //separa string
   num = num.split('').reverse()  //['1',1,0,0,1,0,0] -> [0,0,1,0,0,1,1]
   let result = 0;
   for (let i = 0; i < num.length; i++) {
      //2^0 = 1 * 1 resultado final = 1
      if (num[i] === '0' || num[i] === '1') {
         result += Math.pow(2, i) * +num[i] //Number(num[i]);  parseInt(num[i]);
      }
      else return 'No se mando un numero binario valido';
   }
   return result;
}
// console.log(BinarioADecimal('00111001'));
​
function DecimalABinario(num) { //57
   //se divide entre 2 hasta llegar 0
   //57 /2 = 28 [1]
   //28/2 =  14 [0]
   //14 /2 = 7 [0]
   // 7 / 2 = 3 [1]
   // 3 / 2 = 1 [1]
    // 1 /2 = 0 [1]
    //de abaja hacia arriba '111001'
​
   //revisar que sea un number
   if (typeof num !== 'number') return console.log('El valor debe ser un numero');
​
   let result = []; //['1', '0',]
   while (num > 0) {
      result.push(num%2); //retorna el restante de la divicion
      num = Math.floor(num/2); //28
   }
   
   return result.reverse().join(''); //['1',1,0,0,1,0,0] -> '1100100'
}
​
console.log(DecimalABinario(57));
console.log(typeof DecimalABinario(57));
​
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
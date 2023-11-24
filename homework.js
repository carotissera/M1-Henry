'use strict';

function BinarioADecimal(num) {
    if (typeof num == "string"){
var suma=0;
var j=0;
for (var i=num.length-1; i>=0; i--){
    var exp=num[i]*Math.pow(2,j);
    suma =suma +exp;
    j++ 
}
return suma;
} else return "argumento no valida";

}



function DecimalABinario(num) {
    if (typeof num == "number"){
   var i=0;
   var bin =[];
   while (num /2 >= 0.5){
       bin[i]=(num % 2);
       i++;
       num=Math.floor(num/2);
   }
   var binreverse= bin.reverse();
   var numbin= binreverse.join("");
   return numbin;
}
else return "argumento no valida";
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

console.log("2">1);
console.log(2>1);

//do  not use such type of conversion it will create confusion
console.log(null >0);//false
console.log(null==0);//false
console.log(null >=0);//true
/*the reason is that equatity operator and comparison operator works differently
comparison convert null to a number and treat it as a zero
*/

//STRICT CHECK checks the value as well as datatype also.
console.log(2===2);//true
console.log("2"===2);//false
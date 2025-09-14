const marvel_heros = ["thor","ironman" ,"spuderman"] // strings should me seprated by commas
const dc_heros =["superman","flash","batmna"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);// it gives you in output array inside array.

marvel_heros.concat(dc_heros)
console.log(marvel_heros)

const all_new_heros= [...marvel_heros,...dc_heros]
console.log(all_new_heros);//spread operators.

const another_array = [1,2,3,[4,5],7,[6,7,[4,5]]]
const realarray = another_array.flat(Infinity)
console.log(realarray);


let score1=100
let score2=200
let score3 =300
console.log(Array.of(score1,score2,score3));

//learn about is array,from array.
//learn about combining arrays.

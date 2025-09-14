const score = 400
console.log(score);
console.log(typeof(score));

const balance = new Number(score)
console.log(balance);
console.log(typeof(balance));

console.log(balance.toString().length);
console.log(balance.toFixed(3)); // can be used in E-comm webs for the precision as the precision values can be too long.

const othernumber = 123.896
console.log(othernumber.toPrecision(4));// take precise value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //easy readability.
//here en_IN is for indian format.

console.log(Math);
console.log(Math.abs(-4)); // to convert negative value into positive.
//Application: A fitness app tracking your progress towards a weight goal. 
// It doesn't matter if you are over or under your goal; you just want to know by how much.
const goalWeight = 75; // kg
const currentWeight = 72.5; // kg

const difference = Math.abs(goalWeight - currentWeight);

console.log(`You are ${difference} kg away from your goal.`);
// Output: You are 2.5 kg away from your goal.

let playerX = 150;
let enemyX = 165;
const detectionRange = 10;

const distance = Math.abs(playerX - enemyX);

if (distance < detectionRange) {
  console.log("Enemy is close! Prepare for battle! ⚔️");
} else {
  console.log("All clear.");
}
// Output: Enemy is close! Prepare for battle! ⚔️

const budget = 2000;
const actualSpending = 2150;

const variance = Math.abs(budget - actualSpending);

console.log(`Your spending variance this month was $${variance}.`);
// Output: Your spending variance this month was $150.


console.log(Math.round(4.5));
const weightKg = 70;
const heightM = 1.75;

// BMI formula: weight / height^2
const rawBmi = weightKg / (heightM * heightM); // 22.85714...

const displayBmi = Math.round(rawBmi);

console.log(`Your calculated BMI is approximately ${displayBmi}.`);
// Output: Your calculated BMI is approximately 23.
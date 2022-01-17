// Iteration 1: Names and Input
const hacker1 = 'Taylor';
const hacker2 = 'Asif';
console.log(`The driver's name is ${hacker1}!`);
console.log(`The navigator's name is ${hacker2}!`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!!!`)
}
// Iteration 3: Loops
//first task
let driver = hacker1.split('').join(' ')
console.log(driver.toUpperCase());
//second task
let hacker2Navigator = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Navigator += hacker2[i];
}
console.log(hacker2Navigator);
//third task
if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log(`The drivers's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else
    console.log(`What?! You both have the same name`);
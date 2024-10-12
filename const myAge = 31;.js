const myAge = 31;
// i set my age before convert
let earlyYears = 2;
// we set "let" because this variable can change
earlyYears *= 10.5;
let laterYears = myAge - 2;
// this is the next years
laterYears *= 4;
// it's the dog years next the first two
console.log(laterYears)
let myAgeInDogYears = earlyYears + laterYears;
// calculation for conversion
const myName = 'Pierre'.toLowerCase();
// lower cases
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);

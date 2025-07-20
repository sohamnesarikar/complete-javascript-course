const firstName = "John";
const birthYear = 1994;
const job = "Programmmer";
const currentYear = 2037;

// before template literals
const johnInfo = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";

console.log(johnInfo);

// after template literals
const johnNewInfo = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(johnNewInfo);

// multiline string before template literal
console.log(
  "Hello, this is \n\
multiple line \n\
string."
);

// multiline string with template literal
console.log(`This is
multiline
string`);

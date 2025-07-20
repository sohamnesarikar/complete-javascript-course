const age = 18;

// === (strict equality operator)
// == (loose equality operator) => type coercion happens => mostly avoid using

if (age === 18) console.log("You are an adult");

console.log(18 === 18);
console.log(18 == 18);
console.log("18" === 18);
console.log("18" == 18);

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 24) {
  console.log("Yes, 24 is amazing number");
} else if (favourite === 7) {
  console.log("7 is also cool number");
} else if (favourite === 18) {
  console.log("18 is lucky number");
} else {
  console.log("please provide number 24 or 7 or 18");
}

if (favourite !== 24) {
  console.log("why not 24?");
}

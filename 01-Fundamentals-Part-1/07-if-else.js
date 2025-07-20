const age = 15;

if (age >= 18) {
  console.log("John will apllicable for driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `John will too young for driving, wait for another ${yearsLeft} years :)`
  );
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

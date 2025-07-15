// Arithmetic operator
const now = 2037;
const ageJohn = now - 1985;
const ageBob = now - 2019;
console.log(ageJohn, ageBob);

console.log(ageJohn * 2, ageJohn / 2);
console.log(ageBob % 10); // modulus -> remainder
console.log(2 ** 3); // 2 to the power 3

// Concatination operator
const firstName = "John";
const lastName = "Doe";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 5;
x += 5; // x = x + 5
x *= 4; // x = x * 4
console.log(x);

// increment and decrement operator
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// comparison operator
console.log(ageJohn >= 18);
console.log(ageBob >= 18);

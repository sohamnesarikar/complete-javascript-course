// falsy values => "", 0, false, null, undefined, NaN

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean("abc"));
console.log(Boolean(123));

const money = 0;

if (money) {
  console.log(`Please spend it carefully`);
} else {
  console.log("Please find a job");
}

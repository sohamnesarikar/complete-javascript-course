// type conversion
const inputBirthYear = "1993";
console.log(inputBirthYear);
console.log(Number(inputBirthYear));

const age = 24;
console.log(age);
console.log(String(age));

// NaN
console.log(Number("John"));
console.log(typeof NaN);

// type coercion
console.log("2" + "2" + 3 - 100); // 123
console.log(true + false + "1"); // '11'
console.log([] + null + 1); // '' + null => 'null' + 1 => "null1"
console.log("10" - "4" - "3" - 2 + "5"); // '15'
console.log(null + 1); // 1
console.log(undefined + 1); // NaN

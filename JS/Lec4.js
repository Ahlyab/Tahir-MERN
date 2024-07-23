/*
3 types of loops
1. while loop
2. do while loop
3. for loop (it has many variations)
*/

var number = 5;
var factorial = 1;

for (let i = 1; i <= number; i++) {
  // 6 <= 5
  factorial = factorial * i; // 120 * 5 = 120
}

console.log(factorial); // 120
// let i = 11;

// do {
//   console.log(i); // 1 2
//   i++; // 2
// } while (i <= 10);

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

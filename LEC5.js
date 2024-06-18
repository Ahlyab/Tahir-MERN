// array : collection of data

// Ali, Fahad, Tahir, Asad, Saad
var name1 = "Ali";
var name2 = "Fahad";
var name3 = "Tahir";
var name4 = "Asad";
var name5 = "Saad";

// array
// create an array
// var arrayName = [value1, value2, value3, value4, value5];
// var nums = [1, 2, 3];

// console.log(nums);
// console.log(nums.length);

// console.log("before change : " + nums[1]);
// nums[1] = 5;
// console.log("after change : " + nums[1]);
// console.log(nums);

// how to add values in the array
// push
// nums.push(99);
// console.log(nums);

// shift
// nums.shift();
// console.log(nums);

// toString
// console.log(nums.toString());

// loops
// for loop
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for each loop
// nums.forEach((value) => {
//   console.log(value);
// });

// map
// console.log(nums);
// var newNums = nums.map((value) => {
//   return value * 3;
// });

// console.log(nums);

// console.log(newNums);

// var newestNums = newNums.map((value) => {
//   return value * 5;
// });
// console.log(newestNums);

// manually

// var arr = [1, 2, 3];
// var newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 3);
// }

// console.log(arr);
// console.log(newArr);

// filter

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = numbers.filter((value) => {
  return value % 2 == 0;
});

console.log(numbers);
console.log(evenNumbers);

var name = "Ali Hamza Afzal";
// array of names that contains hamza
var names = ["Ali Raza", "Hamza Afzal", "Afzal Ali", "Ali Hamza"];

/*
LEC 6
more of array like sorting, finding smallest number from an array, finding largest number from an array, etc
Strings essential functions
start with functions

LEC 7
functions -> function declaration, function expression, arrow functions
Objects -> object declaration, object properties, object methods, object destructuring, object spread operator

Lec 8
Express.js
Node.js
*/

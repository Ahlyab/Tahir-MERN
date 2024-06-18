// decision making - if else
/*

if(condition){
    // code
}else{
    // code
}

var isRaining = false;

if(isRaining){
    console.log("Take an umbrella");
}else{
    console.log("Leave the umbrella at home");
}

*/

// var isRaining = true;

// if (isRaining) {
//   console.log("Take an umbrella");
// } else {
//   console.log("Leave the umbrella at home");
// }

// var marks = 39;

// if (marks < 50) {
//   // 50 < 50 -> false
//   console.log("Fail");
// } else {
//   console.log("Pass");
// }

var number = 3;

// arithmetic operators -> modulus -> remainder
// 4 % 2 -> 0

// if (number % 2 == 0) {
//   // 3 % 2 -> 1,  1 == 0 -> false
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// if else ladder

var n = 6;

if (n == 1) {
  // 3 == 1 -> false
  console.log("One");
} else if (n == 2) {
  // 3 == 2 -> false
  console.log("Two");
} else if (n == 3) {
  // 3 == 3 -> true
  console.log("Three");
} else if (n == 4) {
  console.log("Four");
} else {
  console.log("number is not between 1 and 4");
}

// switch case
/*
switch(expression){
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
*/

var month = 5;

switch (month) {
  case 1:
    console.log("January");
    break; // -> exit from switch case
  case 2:
    console.log("February");
    break; // stop you don't have to go any further
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}

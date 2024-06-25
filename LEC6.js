// function definition
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; ++i) {
    result = result * i;
  }
  return result;
}
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

/*
prime numbers have only 2 factors 1 and the number itself
*/

function isPrime(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log("number is prime");
  } else {
    console.log("number is not prime");
  }
}

// function call
// console.log("i am going to calculate factorial of 5");
// console.log("Factorial of 5 is " + factorial(5));

// console.log("number is 5");
// console.log("is 4 even? " + isEven(4));

// isPrime(5); // prime number
// isPrime(6); // not prime number
// isPrime(7); // prime number

/*
2 x 1 = 2
2 x 2 = 4
*/

function printTable(number, limit) {
  for (let i = 1; i <= limit; ++i) {
    // console.log(number + " x " + i + " = " + number * i);
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

printTable(2, 20);

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

/*
  fat arrow


  
  */

// function isEven(number) {
//     return number %2 === 0;
// }

// function expression
// const isEven = function (number) {
//   return number % 2 === 0;
// };

// this keyword

// const isEven = (number) => number % 2 === 0;

// console.log(isEven(8));

// ----------------------------------------------------------------------
// OBJECTS

const animal = {
  // attribute
  name: "Cat",
  weight: "2kg",
};

// console.log(`name : ${animal.name}`);
// console.log(`weight : ${animal.weight}`);

// console.log(`Name : ${Student.name}`);
// console.log(`Roll No : ${Student.RollNo}`);
// console.log(`CGPA : ${Student.CGPA}`);

// student object
const Student = {
  name: "Ali",
  RollNo: "1",
  CGPA: 3.7,
  marks: [92, 82, 91, 78, 88],
  printName: function () {
    console.log(this.name);
  },
  calAvg: function () {
    let avg = 0;
    this.marks.forEach((mark) => {
      avg = avg + mark;
    });
    return avg / this.marks.length;
  },
};

// add attributes to student object
// objectName.newAttributeName = Value;
Student.ContactNo = "123456789";
Student.RollNo = "3";
Student.printInformation = function () {
  console.log(`name : ${this.name}`);
  console.log(`RollNo : ${this.RollNo}`);
  console.log(`CGPA : ${this.CGPA}`);
  console.log(`Contact No : ${this.ContactNo}`);
};

console.log(Student.calAvg());
// Student.printName();
// Student.printInformation();

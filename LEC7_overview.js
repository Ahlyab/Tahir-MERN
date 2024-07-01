/*
Employee Object
Attributes:
employeeID, name, designation, wage
functions:
printInformation, calculateTaxOnWage, calculateWageOfDay
*/

const Employee = {
  employeeID: "GD1",
  name: "Jhon",
  designation: "Graphic Designer",
  wage: 20,

  // functions

  printInformation: function () {
    console.log(`Employee Id : ${this.employeeID}`);
    console.log(`Name : ${this.name}`);
    console.log(`Designation : ${this.designation}`);
    console.log(`Wage : $${this.wage}/hr`);
  },

  calculateWageOfDay: function () {
    return this.wage * 8;
  },

  calculateTaxOnWage: function () {
    const wageOfMonth = this.calculateWageOfDay() * 30;
    const percentage = wageOfMonth * 0.3;
    return percentage;
  },
};

Employee.printInformation();
const dayWage = Employee.calculateWageOfDay();
const monthlyTax = Employee.calculateTaxOnWage();
const remainingWage = Employee.calculateWageOfDay() * 30 - monthlyTax;

console.log(`Daily Wage : ${dayWage}`);
console.log(`Monthly Tax : ${monthlyTax}`);
console.log(`Salary after taxation : ${remainingWage}`);

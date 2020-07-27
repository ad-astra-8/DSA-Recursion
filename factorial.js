// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found 
// by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
    // base case
    if (number <= 0) {
      return 1;
    }
    // recursive case
    // n! = n * (n - 1)!
    return number * factorial(number - 1);
  }
  
  // console.log(factorial(5));
  
  module.exports = { factorial };
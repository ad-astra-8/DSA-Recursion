// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(num, pow){
    // Base case
if (pow < 0) {
    console.log(`Pow must be >= 0`);
} else if (pow === 0) {
    // base case
    return 1;
} else {
    // recursive case
    // input to the recursive case is num and pow - 1
    // output of the recursive all is the number multiplied by what is returned by powerCalculator
    return num * powerCalculator(num, pow - 1);
  }
}

// test the function
console.log(powerCalculator(10, 2));

module.exports = { powerCalculator };
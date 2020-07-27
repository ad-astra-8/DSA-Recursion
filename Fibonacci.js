// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// Memoization is an optimization technique that speeds up applications by storing results of expensive function calls and returning the cached results when the same inputs occur again.
// https://scotch.io/tutorials/understanding-memorization-in-javascript
function fibonacci(num, memo) {
    // memo is an object to cache values already computed
    memo = memo || {};
    // if the value has been computed, don't recompute, just return it
    if (memo[num]) {
      return memo[num];
    }
    if (num <= 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    //   compute and store values in the object
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  }
  
  console.log(fibonacci(7));
  
  module.exports = { fibonacci };
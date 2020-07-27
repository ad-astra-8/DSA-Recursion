//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(string) {
    // base case - empty string
    if (string === "") {
      return string;
    }
    else {
      return reverseString(string.substring(1)) + string.charAt(0);
    }
  }
  
  // test fn
  console.log(reverseString("This is my reverse string"));
  
  module.exports = { reverseString };
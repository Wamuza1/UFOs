// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  console.log(addition(4, 5));
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  console.log(doubleAddition(65,34))


// Original addition function
function addition(a, b) {
    return a + b;
  }
//  /Arrow function
  console.log(printHello);
  addition = (a, b) => a + b;
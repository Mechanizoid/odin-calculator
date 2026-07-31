// script.js

console.log('hello, world!');


// math operator functions

function add(addendOne, addendTwo) {
  return addendOne + addendTwo;
}

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function multiply(factorOne, factorTwo) {
  return factorOne * factorTwo;
}

function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return dividend / divisor;
}

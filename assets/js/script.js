// script.js

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

function operate(firstNumber, secondNumber, operator) {
  switch(operator) {
  case '+':
    return add(firstNumber, secondNumber);
  case '-':
    return subtract(firstNumber, secondNumber);
  case '*':
    return multiply(firstNumber, secondNumber);
  case '/':
    return divide(firstNumber, secondNumber);
  default:
    throw new Error('Invalid operator');
  }
}


// operand variables
let [firstNumber, operand, secondNumber] = Array(3).fill(undefined);

const buttons = document.querySelector('#calculator-button-container');

buttons.addEventListener('click', (event) => {
  const buttonClicked = event.target.closest('.calculator-button');

  if(!buttonClicked)
    return;

  console.log(`Button clicked: ${buttonClicked.textContent}`);
});

console.log('hello, world!');

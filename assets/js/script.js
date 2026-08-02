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
      throw new Error(`Invalid operator: ${operator}`);
  }
}

function toggleNegative() {
  if (display.textContent[0] === '-') {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = '-' + display.textContent;
  }
}

function clearAll() {
  firstOperand = null;
  operator = null;
  resultDisplayed = true;
  display.textContent = '0';
}

function processKey(key) {
  let result = null;
  let secondOperand = null;

  switch (key) {
    case '0': case '1': case '2': case '3': case '4': case '5':
    case '6': case '7': case '8': case '9':
      if (resultDisplayed) {
        resultDisplayed = false;
        display.textContent = '';
      }
      display.textContent = display.textContent + key;
      break;
    case '.':
      if (resultDisplayed) {
        resultDisplayed = false;
        display.textContent = '0.';
      } else if (!display.textContent.includes('.')) {
        display.textContent = display.textContent + key;
      }
      break;
    case '(-)':
      if (!resultDisplayed) {
        toggleNegative();
      }
      break;
    case '*': case '/': case '+': case '-':
      if (!firstOperand) {
        firstOperand = Number(display.textContent);
        operator = key;
        resultDisplayed = true;
        break;
      }
    case '=':
      if (firstOperand) {
        secondOperand = Number(display.textContent);
        result = operate(firstOperand, secondOperand, operator);
        display.textContent = +result.toFixed(8);
        resultDisplayed = true;

        // clear operators and operands for next input
        firstOperand = null;
        operator = null;
      }

      if (key != '=') {
        operator = key;
        firstOperand = result;
      }
      break;
    case 'Del':
      if (!resultDisplayed) {
        display.textContent = display.textContent.slice(0, -1);

        if (display.textContent === '') {
          display.textContent = '0';
        }
      }
      break;
    case 'AC':
      clearAll();
      break;
  }
}


// operand variables
let resultDisplayed = true, firstOperand = null, operator = null;

const buttons = document.querySelector('#ui-btn-container');
const display = document.querySelector('#lcd-display');

buttons.addEventListener('click', (event) => {
  const buttonClicked = event.target.closest('.ui-btn');

  if(!buttonClicked)
    return;

  console.log(`Button clicked: ${buttonClicked.textContent}`);
  processKey(buttonClicked.textContent);
});

console.log('hello, world!');

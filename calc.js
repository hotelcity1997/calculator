function add(a, b) {
  if (!result) {
    result = a + b;
  } else {
    result = result + +b;
  }
}

function subtract(a, b) {
  if (!result) {
    result = a - b;
  } else {
    result = result - b;
  }
}

function multiply(a, b) {
  if (!result) {
    result = a * b;
  } else {
    result = result * b;
  }
}

function divide(a, b) {
  if (!result) {
    result = a / b;
  } else {
    result = result / b;
  }
}

function operate(operation, a, b) {
  return operation(a, b);
}

let numA = '';
let numB = '';
let result;
let numInput = '';

let input = document.querySelectorAll('.keypad button');
input.forEach((button) => {
  button.addEventListener('click', () => {
    input = button.id;
    numInput += input;
    display.textContent = numInput;
    console.log(numInput);
   })
 });

let operatorChoice;
let operator = document.querySelectorAll('.operators button');
operator.forEach((button) => {
  button.addEventListener('click', () => {
    operatorChoice = button.id;
    numA = parseInt(numInput);
    numInput = '';
    console.log(numA);
   })
 });

// store the result of the first operation in a variable
// use that variable as operandA for subsequent operator

let equals = document.getElementById('equals');
equals.addEventListener ('click', () => {
  numB = parseInt(numInput);
  if (!operatorChoice) {
    display.textContent = numInput;
  } else {
    solve();
  }
  console.log(result);
  display.textContent = result;
})


function solve() {
  switch (operatorChoice) {
    case 'add':
      operate(add, numA, numB);
      break;
    case 'subtract':
      operate(subtract, numA, numB);
      break;  
    case 'multiply':
      operate(multiply, numA, numB);
      break;
    case 'divide':
      operate(divide, numA, numB);
      break;
  }
  console.log(result);
  display.textContent = result;
}

let clear = document.getElementById('clear');
clear.addEventListener ('click', () => {
  numInput = '';
  numA = '';
  numB = '';
  result = '';
  display.textContent = '0';
})

let display = document.querySelector('.calc-display');
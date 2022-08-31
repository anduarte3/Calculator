let previousOperand = document.getElementById('previous-operand');
let currentOperand = document.getElementById('current-operand');

let numberButton = document.querySelectorAll('.number-button');
let operatorButton = document.querySelectorAll('.number-operator');
let clearButton = document.querySelector('#clear-button');
let deleteButton = document.querySelector('#delete-button');
let equalsButton = document.querySelector("#equal-button")

let firstOperand = '';
let secondOperand = '';
let operatorSelect = '';
let resultOperator = '';


numberButton.forEach(button => 
  button.addEventListener('click', () => getNumber(button.textContent)))

operatorButton.forEach(button => 
  button.addEventListener('click', () => getOperator(button.textContent)))

function getNumber(number) {
  currentOperand.textContent += number;
  if (firstOperand !== '' && operatorSelect !== '') {
      secondOperand = currentOperand.textContent;
  }  
}

function getOperator(operator) {
  firstOperand = currentOperand.textContent;
  resetCurrent()
  previousOperand.textContent += operator;
  operatorSelect = operator;
  if (operatorSelect != '') {
    previousOperand.textContent = `${firstOperand} ${operatorSelect}`;
  }
}

function resetCurrent() {
  currentOperand.textContent = '';
}

function result() {
  firstOperand = parseInt(firstOperand)
  secondOperand = parseInt(secondOperand)
  console.log(firstOperand)
  console.log(operatorSelect)
  console.log(secondOperand)
  let resultOperator = operate(firstOperand, operatorSelect, secondOperand);
  previousOperand.textContent = `${firstOperand} ${operatorSelect} ${secondOperand} ${'='} ${resultOperator}`;
  currentOperand.textContent = resultOperator;
}

equalsButton.addEventListener('click', () =>  {
  result()
});

function add(a,b) {
  return a + b
}
function subtract(a,b) {
  return a - b
}
function multiply(a,b) {
  return a * b    
}
function divide(a,b) {
  return a / b
}

function operate(a,operator,b) {
    //console.log(firstOperand)
  switch(operator) {

    case '+':
      return add(a,b)
    case '-':
      return subtract(a,b)
    case '*':
      return multiply(a,b)
    case '/':
      return divide(a,b)
      
    default:
      console.log('Invalid')
  }
}

clearButton.addEventListener('click', () => {
  currentOperand.textContent = '';
  firstOperand = '';
  secondOperand = '';
  operatorSelect = '';
  previousOperand.textContent = '';
});

deleteButton.addEventListener('click', () => {
  currentOperand.textContent = '';    
});

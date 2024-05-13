const display = document.getElementById('display');
let firstNumber, secondNumber, operator;
let firstArray = [], secondArray = [];
let total = 0, step = 0;

clearAll = () => {
  display.value = '';
  firstNumber = null;
  secondNumber = null;
  operator = null;
  firstArray = [];
  secondArray = [];
  total = 0;
  step = 0;
  console.clear();
}
getItem = (number) => {
  if (step === 0 || step === 1) {
    firstArray.push(number);
    step = 1;
    firstNumber = firstArray.join('');
    display.value = firstNumber;
    console.log(firstNumber);
  } else if (step === 2) {
    secondArray.push(number);
    secondNumber = secondArray.join('');
    display.value = secondNumber;
    console.log(secondNumber);
  }
}
getOperator = (item) => {
  operator = item;
  step = 2;
  display.value = operator;
  console.log(operator);
}
calculate = () => {
  if (operator === '+') {
    total = Number(firstNumber) + Number(secondNumber);
    display.value = total;
    firstNumber = total;
  } else if (operator === '-') {
    total = Number(firstNumber) - Number(secondNumber);
    display.value = total;
    firstNumber = total;
  } else if (operator === '*') {
    total = Number(firstNumber) * Number(secondNumber);
    display.value = total;
    firstNumber = total;
  } else if (operator === '/') {
    total = Number(firstNumber) / Number(secondNumber);
    if (Number(firstNumber) === 0 || Number(secondNumber) === 0) {
      display.value = '∞';
    } else {
      display.value = total;
      firstNumber = total;
    }
  }
  console.log(firstNumber, operator, secondNumber, '=', total);
  firstArray = [];
  secondArray = [];
  step = 1;
}
display.value = '';
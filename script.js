let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.getElementById("display");

function pressNumber(num) {
  if (operator === "") {
    firstNumber += num;
    display.value = firstNumber;
  } else {
    secondNumber += num;
    display.value = secondNumber;
  }
}

function setOperator(op) {
  if (firstNumber === "") return; 
  operator = op;
  display.value = operator;
}

function calculate() {
  let result = 0;
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error";

  display.value = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
}

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.value = "";
}

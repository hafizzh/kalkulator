let currentInput = "";
let operation = "";
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateResult();
}

function setOperation(op) {
  if (currentInput === "") return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else {
    calculate();
  }
  operation = op;
  currentInput = "";
}

function calculate() {
  if (currentInput === "" || firstOperand === null || operation === "") return;

  let secondOperand = parseFloat(currentInput);
  let result;

  switch (operation) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  addToHistory(`${firstOperand} ${operation} ${secondOperand} = ${result}`);
  currentInput = result.toString();
  firstOperand = null;
  operation = "";
  updateResult();
}

function clearResult() {
  currentInput = "";
  firstOperand = null;
  operation = "";
  updateResult();
}

function updateResult() {
  document.getElementById("result").value = currentInput;
}

function addToHistory(entry) {
  const historyList = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = entry;
  historyList.appendChild(listItem);
}

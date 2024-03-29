let numOne = null;
let numTwo = null;
let operand = null;

document.querySelectorAll(".btns").forEach((el) =>
  el.addEventListener("click", function () {
    let displayNumber = document.querySelector("#num-display");
    const textValue = this.textContent;

    if (displayNumber.textContent === "0") {
      displayNumber.textContent = textValue;
    } else {
      displayNumber.textContent += textValue;
    }

    if (operand === null) {
      numOne = Number(displayNumber.textContent);
    } else {
      numTwo = Number(displayNumber.textContent);
    }
    // operate(numOne, operand, numTwo);
  })
);

document.querySelectorAll(".btns-operators").forEach((el) =>
  el.addEventListener("click", function () {
    operand = this.textContent;
    document.querySelector("#num-display").textContent = "0";
  })
);

document.querySelector("#equal-btn").addEventListener("click", () => {
  if (numOne !== null && operand === "%" && numTwo === null) {
    operate(numOne, operand);
  } else if (numOne !== null && operand !== null && numTwo !== null) {
    operate(numOne, operand, numTwo);
  }
});

document.querySelector("#all-clear").addEventListener("click", function () {
  numOne = null;
  numTwo = null;
  operand = null;
  document.querySelector("#num-display").textContent = "0";
});

function operate(firstValue, operand, secondValue) {
  let result;
  let resultDisplay = document.querySelector("#num-display");
  if (operand === "+") {
    result = addNumber(firstValue, secondValue);
    numOne = result;
    numTwo = null;
  } else if (operand === "-") {
    result = minusNumber(firstValue, secondValue);
    numOne = result;
    numTwo = null;
  } else if (operand === "*") {
    result = multiplyNumber(firstValue, secondValue);
    numOne = result;
    numTwo = null;
  } else if (operand === "/") {
    result = divideNumber(firstValue, secondValue);
    numOne = result;
    numTwo = null;
  } else if (operand === "%") {
    console.log(operand);
    result = percentNumber(firstValue);
  }
  resultDisplay.textContent = result;
  numOne = result;
  numTwo = null;
}

function addNumber(firstValue, secondValue) {
  return firstValue + secondValue;
}

function minusNumber(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiplyNumber(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divideNumber(firstValue, secondValue) {
  if (secondValue === 0) {
    return "Error";
  }
  return firstValue / secondValue;
}

function percentNumber(firstValue) {
  return firstValue * 0.01;
}

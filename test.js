const add = (a, b) => a += b;
const subtract = (a, b) => a -= b;
const multiply = (a, b) => a *= b;
const divide = (a, b) => { return (b === 0) ? "cannot divide by zero" : a / b; }

//  Create a new function operate that takes an operator and 2 numbers and 
//  then calls one of the above functions on the numbers. 
let operate = function (operate, a, b) {
    switch (operate) {
        case "+":
            return add(parseFloat(a), parseFloat(b));
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid Operator";
    }
}


// 3 
let displayValue = "";
const btn = document.querySelectorAll(".buttons button");
const display = document.querySelector("#display");
let lastOperator = null;
let operator = null;
let equalClicked = false;

let buttons = btn.forEach(button => button.addEventListener('click', () => {
    if (!isNaN(parseInt(button.innerHTML))) {
        if (equalClicked) {
            displayValue = "";
            equalClicked = false;
        }
        displayValue += button.innerHTML;
        display.value = displayValue;
    } else if (button.innerHTML === "AC") {
        displayValue = "";
        display.value = displayValue;
        lastOperator = null;
        operator = null;
    } else {
        if (lastOperator !== null) {
            if (displayValue === "") {
                displayValue = "0";
            }
            let result = operate(lastOperator, displayValue, operator);
            if (isNaN(result)) {
                display.value = result;
                displayValue = "";
                lastOperator = null;
                operator = null;
                equalClicked = false;
                return;
            }
            displayValue = result.toString();
            display.value = displayValue;
        }
        lastOperator = button.innerHTML;
        operator = displayValue;
        displayValue = "";
    }
})
)

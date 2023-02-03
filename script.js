const add = (a, b) => a += b;
const subtract = (a, b) => a -= b;
const multiply = (a, b) => a *= b;
const divide = (a, b) => { return (b === 0) ? "cannot divide by zero" : a / b; }

//  Create a new function operate that takes an operator and 2 numbers and 
//  then calls one of the above functions on the numbers. 
const operate = function (operate, a, b) {
    switch (operate) {
        case "+":
            return add(a, b);
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

const calculator = document.querySelector(".calculator");
const equal = calculator.querySelector(".equal");
let digits = calculator.querySelectorAll(".digit");
let operators = calculator.querySelectorAll(".operator");
let storeValue = 0;
let storeOperator = 'test';

digits.forEach(digit => digit.addEventListener('click', () => {
    storeValue = digit.innerHTML;
    console.log(storeValue);
}));

operators.forEach(operator => operator.addEventListener('click', () => {
    storeOperator = operator.innerHTML;
    console.log(`"${storeOperator}"`);
}));


equal.addEventListener('click' ,() => {
    console.log(operate (`"${storeOperator}"`, storeValue,2));
})
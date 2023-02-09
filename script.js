let operate = function (operate, a, b) {
    const add = (a, b) => a += b;
    const subtract = (a, b) => a -= b;
    const multiply = (a, b) => a *= b;
    const divide = (a, b) => { return (b === 0) ? "cannot divide by zero" : a / b; }
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
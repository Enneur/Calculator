const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const previousDisplay = document.querySelector(".previous-display");
const currentDisplay = document.querySelector(".current-display");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal")
const moduloButton = document.querySelector("#modulo");
const deleteButton = document.querySelector("#delete");

let currentOperand = "";
let previousOperand  = "";
let operation = null;



function operate() {
    let curr = parseFloat(currentOperand);
    let prev = parseFloat(previousOperand);
    let result;

    if ( isNaN(prev) || isNaN(curr) )return;
     operation === "+" ?result = prev + curr
    :operation === "-" ?result = prev - curr
    :operation === "*" ?result = prev * curr
    :operation === "/" && curr === 0 ? result = "Can not divide by 0"
    :operation === "/" ?result = prev / curr
    :operation === "%" ? result = prev % curr
    :"";

    currentOperand =result;
    operation = null;
    previousOperand = "";
}

function handleButtons () {
    numbers.forEach(nmbr => {
        nmbr.addEventListener("click" , () => {
            currentOperand === "Can not divit by 0" ? currentOperand = '' : ''
            currentOperand === 0 ? currentOperand = " " : '';
            currentOperand = currentOperand.toString();
            if(nmbr.textContent === '.' && currentOperand.includes('.')) return
            currentOperand += nmbr.textContent.toString()
            updateDisplay()
        })
    })
    operators.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentOperand === "") return"";
            operation = btn.textContent;
            display();
            updateDisplay()
        })
    })
    clearButton.addEventListener("click", () => {
        currentOperand = 0;
        previousOperand = "";
        operation = null;
        updateDisplay();
    })
    deleteButton.addEventListener("click", () => {
        let temp;
        if(currentOperand === "Cannot divit by 0") {
            currentOperand = 0;
            temp = currentOperand;
        } else {
            temp = currentOperand.toString().slice(0,-1);
        }

        if (temp === "" || temp === 0) {
            temp = 0;
            currentOperand = temp;
            updateDisplay();
        } else {
            currentOperand = parseFloat(temp);
            updateDisplay();
        }
    })
    equalButton.addEventListener("click", () => {
        operate() ;
        updateDisplay();
    })
    moduloButton.addEventListener("click", () => {
        operation = "%";
        display();
        updateDisplay();
    });
    
}

function updateDisplay() {
    currentDisplay.textContent = currentOperand;
    previousDisplay.textContent = previousOperand;

};

function display() {
    if(currentOperand === "")return;
    if(previousOperand !== "") {
         operate();
    }

    previousOperand = `${currentOperand} ${operation}`;
    currentOperand = "";
}

handleButtons();
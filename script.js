const calculatorButtons = document.querySelector('.calculator-buttons');
const calculatorOutput = document.querySelector('.calculator-output');

let x = 0;
let currentNumber = 0;
let currentOperation = '';

function clearOutput() {
    calculatorOutput.textContent = 0;
};

function add(x, y) {
    return x + y;
};

function minus(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function calculator(buttonId) {
    if (buttonId === 'clear') {
        clearOutput();

    } else if (buttonId === 'equals') {
        currentNumber = calculatorOutput.textContent;
        clearOutput();
        
        if (currentOperation === 'plus') {
            calculatorOutput.textContent = add(x, parseInt(currentNumber));
        } else if (currentOperation === 'minus') {
            calculatorOutput.textContent = minus(x, parseInt(currentNumber));
        } else if (currentOperation === 'multiply') {
            calculatorOutput.textContent = multiply(x ,parseInt(currentNumber));
        }
        currentOperation = '';

    } else if (buttonId === 'plus') {
        x = parseInt(calculatorOutput.textContent);
        currentOperation = 'plus';
        clearOutput();

    } else if (buttonId === 'minus') { 
        x = parseInt(calculatorOutput.textContent);
        currentOperation = 'minus';
        clearOutput();

    } else if (buttonId === 'multiply') {
        x = parseInt(calculatorOutput.textContent);
        currentOperation = 'multiply';
        clearOutput();

    } else {
        console.log(buttonId);
        currentNumber = calculatorOutput.textContent;

        if (currentNumber == 0) {
            calculatorOutput.textContent = buttonId;    
        } else {
            calculatorOutput.textContent = currentNumber + buttonId;     
        }                
    }
};

Array.from(calculatorButtons.children).forEach(button => {
    button.addEventListener('click', () => {
        calculator(button.id);
    });
});
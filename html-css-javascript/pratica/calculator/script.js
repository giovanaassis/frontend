'use strict';

const calcBox = document.getElementById('calc');
const buttonsCalc = document.querySelectorAll('#buttons-container button');
const previousOperationTxt = document.getElementById('previous-operation');
const currentOperationTxt = document.getElementById('current-operation');
const numbersBtn = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equal-btn');
const deleteBtn = document.getElementById('delete-btn');
const clearBtn = document.getElementById('clear-btn');


/* dark mode code */
const switchDarkMode = () => {
    const element = document.querySelector('.circle');
    element.classList.toggle('slide');

    if (element.classList.contains('slide')) {
        calcBox.style.backgroundColor = '#222431';
        calcBox.style.color = 'white';
        
        buttonsCalc.forEach((e) => {
            e.style.backgroundColor = '#3d3f4b';
            e.style.color = 'white'
        })
    } else {
        calcBox.style.backgroundColor = 'white';
        calcBox.style.color = 'black';

        buttonsCalc.forEach((e) => {
            e.style.backgroundColor = 'rgb(228, 228, 228)';
            e.style.color = 'black';
        });
    }
}

/* calculator code */

class Calculator {
    constructor(previousOperationTxt, currentOperationTxt) {
        this.previousOpTxt = previousOperationTxt;
        this.currentOpTxt = currentOperationTxt;
        this.clear();
    }

    calculate() {
        let result;

        const previous = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);

        if (isNaN(previous) || isNaN(current)) return;

        switch (this.operator) {
            case '+': result = previous + current;
                break;
            case '-': result = previous - current;
                break;
            case 'x': result = previous * current;
                break;
            case '÷': result = previous / current;
                break;
            default: return;
        }

        this.currentOperation = result;
        this.operator = undefined;
        this.previousOperation = '';
    }

    chooseOperator(op) {
        if (this.previousOperation !== '') {
            this.calculate();
        }

        if (this.currentOperation === '') return;

        this.operator = op;
        this.previousOperation = this.currentOperation;
        this.currentOperation = '';
    }

    appendNumber(num) {
        if (this.currentOperation.includes('.') && num === '.') return;
        this.currentOperation = `${this.currentOperation}${num}`;
    }

    delete() {
        this.currentOperation = this.currentOperation.slice(0, -1);
    }

    clear() {
        this.currentOperation = '';
        this.previousOperation = '';
        this.operator = undefined;
    }

    updateDisplay() {
        this.previousOpTxt.innerText = `${this.previousOperation} ${this.operator || ''}`;
        this.currentOpTxt.innerText = this.currentOperation;
    }
}

const calc = new Calculator(previousOperationTxt, currentOperationTxt);

clearBtn.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
})

numbersBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        calc.appendNumber(btn.innerHTML);
        calc.updateDisplay();
    })
})

operatorsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        calc.chooseOperator(btn.innerHTML);
        calc.updateDisplay();
    })
})

equalBtn.addEventListener('click', () => {
    calc.calculate();
    calc.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calc.delete();
    calc.updateDisplay();
})
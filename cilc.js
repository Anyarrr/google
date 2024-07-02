let firstNumber = ''; //первое число
let secondNumber = '';//второе число
let sing = '';//знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '÷', 'x^y'];
//экран моего калькулятора 0
const out = document.querySelector('.calc-scrin p');

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.battery').onclick = clearAll;
    //нажата не кнопка
    document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка clearAll rad
    if (event.target.classList.contains('battery')) return;

    out.textContent = '';
//получаю нажатую кнопку
const key = event.target.textContent;

//если нажата клавиша 0-9 или .
if (digit.includes(key)) {
    if (secondNumber === '' && sing === '') {
        firstNumber += key;

    out.textContent = firstNumber;
}
else if (firstNumber !== '' && secondNumber !== '' && finish) {
    secondNumber = key;
    finish = false;
    out.textContent = secondNumber;
}
else {
    secondNumber += key;
    out.textContent = secondNumber;
}
console.table(firstNumber, secondNumber, sing);
    return;
}

//если нажата '-', '+', 'x', '÷', 'x^y'
if (action.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.table(firstNumber, secondNumber, sing);
    return;
}
//нажата =
if (key === '=') {
    if (secondNumber === '') secondNumber = firstNumber;
    switch(sing) {
        case "+":
            firstNumber = (+firstNumber) + (+secondNumber);
            break;
        case "-":
            firstNumber = firstNumber - secondNumber;
            break;
        case "x":
            firstNumber = firstNumber * secondNumber;
            break;
        case "÷":
            firstNumber = arfirstNumberr / secondNumber;
            break;
        case "x^y":
            firstNumber = firstNumber ** secondNumber;
            break;

    }
    finish = true;
    out.textContent = firstNumber;
}

}
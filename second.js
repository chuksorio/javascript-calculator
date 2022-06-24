const numA = parseFloat(prompt('Enter first number:'));
const operator = prompt('Enter choice: +, -, /, *');
const numB = parseFloat(prompt('enter second number:'));

let result;

if (operator == '+') {
    result = numA + numB;
    alert(result)
} else if (operator == '-') {
    result = numA - numB
    alert(result)
} else if (operator == '*') {
    result = numA * numB;
    alert(result)
} else if (operator == '/') {
    result = numA / numB;
    alert(result);
} 
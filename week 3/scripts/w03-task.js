/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
       
    const sum = number1 + number2; 
    return sum; 
}

function addNumbers (){
    console.log("addNumbers")
    const firstNumber = Number(document.querySelector("#add1").value); 
    const secondNumber = Number(document.querySelector("#add2").value); 
    const sum = add (firstNumber , secondNumber)
    document.querySelector("#sum").value = sum
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1 , number2) {
    
    const sub = number1 - number2;
    return sub;
} 

function subNumbers (){
    const firstNumber = Number(document.querySelector("#subtract1").value);
    const secondNumber = Number(document.querySelector("#subtract2").value);
    const sub = subtract (firstNumber, secondNumber)
    document.querySelector("#difference").value = sub
}

document.querySelector("#subtractNumbers").addEventListener("click", subNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    const firstNumber = Number(document.querySelector("#factor1").value);
    const secondNumber = Number(document.querySelector("#factor2").value);
    const mult = multiply (firstNumber, secondNumber)
    document.querySelector("#product").value = mult
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide =  (number1, number2) => number1 / number2

const divideNumbers = () => {
    const firstNumber = Number(document.querySelector("#dividend").value);
    const secondNumber = Number(document.querySelector("#divisor").value);
    const div = divide (firstNumber, secondNumber)
    document.querySelector("#quotient").value = div
}

document. querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").value = d


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector("#array").innerHTML = numbersArray
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1)

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0)

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2 )

/* Output Sum of Multiplied by 2 Array */
let multiplynumbersArray = numbersArray.map(number => number * 2) 
document.querySelector("#sumOfMultiplied").innerHTML = multiplynumbersArray.reduce((sum, number) => sum + number)

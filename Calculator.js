
let firstNumber=""
let secondNumber=""
let operator=null
let resetScreen = false

const display=document.querySelector('#display')
const numButtons=document.querySelectorAll('.numButton')
const opButtons=document.querySelectorAll('.opButton')
const eqButton=document.querySelector('.eqButton')
const clearButton=document.querySelector('.clearButton')
//button function
numButtons.forEach(button =>{
    button.addEventListener('click',()=> appendNumber(button.textContent))
})
opButtons.forEach(button =>{
    button.addEventListener('click',()=> setOperation(button.textContent))
})
eqButton.addEventListener('click',()=>compute())
clearButton.addEventListener('click',()=> clear())

//operation buttons
function appendNumber(num){
    if(resetScreen){
        display.textContent=''
        resetScreen=false
    }
    display.textContent += num
}
function setOperation(op) {
    if (operator !== null) compute();
    firstNumber = display.textContent;
    operator = op;
    resetScreen = true;

    // Append the operator to the display
    display.textContent = firstNumber + operator;
}


 //calculation
 function compute(){
    secondNumber = display.textContent
    display.textContent= operate(operator, firstNumber, secondNumber)
 }
 //clear Button
function clear(){
    display.textContent='0'
    firstNumber=''
    secondNumber=''
    operator=null
}

 //operate function 
 function operate(operator,a,b){
    a=Number(a)
    b=Number(b)
    switch(operator){
        case '+':
            return a+b
    
        case '-':
            return a-b

        case '*':
            return a*b
    
        case '/':
            if(b===0){
                return "Error ! Division By Zero is not possible"
            }else{
                return a/b
            }
        default:
            return null
    }
 }
 
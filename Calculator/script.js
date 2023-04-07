const button9 = document.querySelector(".nine");
const button8 = document.querySelector(".eight");
const button7 = document.querySelector(".seven");
const button6 = document.querySelector(".six");
const button5 = document.querySelector(".five");
const button4 = document.querySelector(".four");
const button3 = document.querySelector(".three");
const button2 = document.querySelector(".two");
const button1 = document.querySelector(".one");
const button0 = document.querySelector(".zero");
const buttonDot = document.querySelector(".dot");
const buttonEquals = document.querySelector(".equals");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonMultiply = document.querySelector(".multiply");
const buttonDivide = document.querySelector(".divide");

const numDisplay = document.querySelector(".displayNumbers"); //DISPLAY
const mathButtons = document.querySelectorAll("#numButton"); //All numbers

const buttonClear = document.querySelector(".clear")
const buttonBack = document.querySelector(".back")

let num1 = 0;
let num2 = 0;
let operand = "";

//clears numdisplay
buttonClear.addEventListener("click", () =>{
  num1=0;
  num2=0;
  operand = "";
  numDisplay.textContent="";
})

//removes last digit
buttonBack.addEventListener("click", () =>{
    numDisplay.textContent = numDisplay.textContent.slice(0,-1);
})

//adds number from buttonclick to display
    mathButtons.forEach(button => {
    button.addEventListener("click", () => {
      numDisplay.textContent+=button.textContent;
    });
  });



//operator buttons
buttonPlus.addEventListener("click", () => {
    num1 = parseFloat(numDisplay.textContent);
    numDisplay.textContent += "+";
    operand = "plus";
});

buttonMinus.addEventListener("click", () => {
  num1 = parseFloat(numDisplay.textContent);
  numDisplay.textContent += "-";
  operand = "minus";
});

/*
TODO:
fix multiply and divide
*/
/*
buttonMultiply.addEventListener("click", () => {
  num1 = parseFloat(numDisplay.textContent);
  numDisplay.textContent += "*";
  operand = "multiply";
});


buttonDivide.addEventListener("click", () => {
  num1 = parseFloat(numDisplay.textContent);
  numDisplay.textContent = "/";
  operand = "divide";
});
*/

//equals button
buttonEquals.addEventListener("click", () => {
  const numString = numDisplay.textContent.split(/[+\-]/);
  //numString = numDisplay.textContent.split(/[*\/]/);
  num1 = parseFloat(numString[0]);
  num2 = parseFloat(numString[1]);
  operate(operand);
});

function operate(operand){
 

  if (operand === "plus"){
    numDisplay.textContent = num1+num2;
    
  }
  if(operand === "minus"){
    numDisplay.textContent = num1-num2;
  }
  //idk if if statements below here work yet
  if(operand === "multiply"){
    numDisplay.textContent = num1*num2;
  }
  if(operand === "divide"){
    if(num2!=0){
      numDisplay.textContent = num1/num2;
    }
    else{
      numDisplay.textContent="NaN";
    }
    
  }
  return numDisplay.textContent;
  
}
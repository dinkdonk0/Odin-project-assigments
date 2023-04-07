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


buttonMultiply.addEventListener("click", () => {
  num1 = parseFloat(numDisplay.textContent);
  numDisplay.textContent += "*";
  operand = "multiply";
});


buttonDivide.addEventListener("click", () => {
  num1 = parseFloat(numDisplay.textContent);
  numDisplay.textContent += "/";
  operand = "divide";
});


//equals button
buttonEquals.addEventListener("click", () => {
  let numString;
  if (operand === "plus" || operand === "minus") {
    numString = numDisplay.textContent.split(/[\+\-]/);
  }
  if (operand === "multiply" || operand === "divide") {
    numString = numDisplay.textContent.split(/[\*\/]/);
  }

  num1 = parseFloat(numString[0]);
  num2 = parseFloat(numString[1]);
  numDisplay.textContent = operate(operand);
});

function operate(operand) {
  switch(operand){
    case "plus":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    
    default:
      return "NaN"
  }
}
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

//clears numdisplay
buttonClear.addEventListener("click", () =>{
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




  function add(num1, num2){
    return num1+num2;
  }

  function subtract(num1, num2){
    return num1-num2;
  }

  function multiply(num1, num2){
    return num1*num2;
  }

  function divide(num1, num2){
    if(num2==0){
        return null;
    }
    else{
    return num1/num2;
    }
    
  }
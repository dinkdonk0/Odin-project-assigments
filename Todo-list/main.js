const addTask = document.querySelector(".addTask");
const taskBox = document.querySelector(".addTask2");
const mainContent = document.querySelector(".maincontent");
const addButton = document.querySelector("#button1");
const cancelButton = document.querySelector("#button2");

taskBox.classList.add("hidden");


function swapDivs(){
    taskBox.classList.toggle("hidden");
    addTask.classList.toggle("hidden");
}

addTask.addEventListener("click", swapDivs);

cancelButton.addEventListener("click", swapDivs);

addButton.addEventListener("click", swapDivs);


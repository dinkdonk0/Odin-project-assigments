const addTask = document.querySelector(".addTask");
const taskBox = document.querySelector(".addTask2");
const mainContent = document.querySelector(".maincontent");
const addButton = document.querySelector("#button1");
const cancelButton = document.querySelector("#button2");
const textInput = document.getElementById('myTextInput');
const tasks = document.querySelector(".tasks");

taskBox.classList.add("hidden");


function swapDivs(){
    taskBox.classList.toggle("hidden");
    addTask.classList.toggle("hidden");
}

function taskAdder(){
    const inputValue = textInput.value;    
        if (inputValue.trim() === '') {
            alert('Please enter a task');
            return;
        }
    const newDiv = document.createElement('div');
    newDiv.textContent = inputValue;

    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.textContent = 'X';
    newDiv.appendChild(closeButton);
    tasks.appendChild(newDiv);
    textInput.value = "";
    swapDivs();
}

//handles removal of task div
function handleCloseButtonClick(event) {
    const closeButton = event.target;
    if (closeButton.classList.contains('close-button')) {
        const task = closeButton.parentElement;
        tasks.removeChild(task);
    }
}


addTask.addEventListener("click", swapDivs);

cancelButton.addEventListener("click", swapDivs);

addButton.addEventListener("click", taskAdder);

//remove task div
tasks.addEventListener('click', handleCloseButtonClick);




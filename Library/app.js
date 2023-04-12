// Get the button and div elements
const toggleBtn = document.getElementById('toggleBtn');
const bookAdder = document.querySelector('.bookAdder');
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

// Create an array to store the books
const books = [];

bookForm.addEventListener("submit", addBook );






function addBook(event){
    event.preventDefault();

    //get info from form
    const bookName = document.getElementById("bookName").value;
    const pages = document.getElementById("pages").value;
    const hasRead = document.getElementById("hasRead").checked;


    //create book object with constants (that gets value from html form input)
    const book = {
        name: bookName,
        pages: pages,
        hasRead: hasRead
    };
    //adds book object to array
    books.push(book);

    //calls function that displays all arrayitems on site
    updateBookList();
        
    // Clear the form inputs
    bookForm.reset();
    }


//displays array content to site
function updateBookList() {

    bookList.innerHTML = "";
  
    for(let i=0;i<books.length;i++){
        //creates a div
       const bookDiv = document.createElement("div");
       
       //adds classname to div (for css shenanigans)
       bookDiv.classList.add('book-item');

       bookDiv.innerHTML=  `
       <h3>${books[i].name}</h3>
       <p>Pages: ${books[i].pages}</p>
       <p>Read: ${books[i].hasRead ? 'Yes' : 'No'}</p>
       <button class="book-button">Delete book</button>
        `;

        bookList.appendChild(bookDiv);
    }

}


// Add a click event listener to the button
toggleBtn.addEventListener('click', function () {
    // Get the computed style of the div
    const computedStyle = window.getComputedStyle(bookAdder);

    // Check the current display value of the div
    if (computedStyle.display === 'none') {
        // If the div is hidden, display it
        bookAdder.style.display = 'block';
        toggleBtn.textContent = "Hide"
    } else {
        // If the div is visible, hide it
        bookAdder.style.display = 'none';
        toggleBtn.textContent = "Add book"
    }
});

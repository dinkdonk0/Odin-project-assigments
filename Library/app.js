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
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete book';
       deleteButton.classList.add('book-button');
       deleteButton.setAttribute('data-index', i);
       //should actually be rewritten due to security concerns (innerHTML cross site scripting)
       bookDiv.innerHTML=  `
       <h3>${books[i].name}</h3>
       <p>Pages: ${books[i].pages}</p>
       <p>Read: ${books[i].hasRead ? 'Yes' : 'No'}</p>
        `;
        deleteButton.addEventListener('click', deleteBook);
        
        bookDiv.appendChild(deleteButton);
        bookList.appendChild(bookDiv);
    }

}

function deleteBook(event) {
    // Get the index of the book to remove from the button's data-index attribute
    const index = event.target.getAttribute('data-index');
    
    // Remove the book from the books array using the index
    books.splice(index, 1);
    
    // Update the book list to reflect the removed book
    updateBookList();
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

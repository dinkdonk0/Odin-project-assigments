// Get the button and div elements
const toggleBtn = document.getElementById('toggleBtn');
const bookAdder = document.querySelector('.bookAdder');

// Add a click event listener to the button
toggleBtn.addEventListener('click', function() {
    // Check the current display value of the div
    if (bookAdder.style.display === 'none') {
        // If the div is hidden, display it
        bookAdder.style.display = 'block';
    } else {
        // If the div is visible, hide it
        bookAdder.style.display = 'none';
    }
});
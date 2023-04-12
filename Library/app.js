// Get the button and div elements
const toggleBtn = document.getElementById('toggleBtn');
const bookAdder = document.querySelector('.bookAdder');

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
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;

    function closePopup() {
        popup.classList.remove('show'); // Hides the pop-up
        body.classList.remove('body-popup-active'); // Resets the body class
    }

    // Show the popup
    popup.classList.add('show'); // Displays the pop-up
    body.classList.add('body-popup-active'); // Applies a class to the body

    if (closeBtn) {
        closeBtn.onclick = closePopup; // Closes the pop-up on button click
    } else {
        console.error('Close button not found');
    }

    window.onclick = function(event) {
        if (event.target === popup) {
            closePopup(); // Closes the pop-up if clicking outside of it
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;

    function closePopup() {
        popup.classList.remove('show'); // Hides the pop-up
        body.classList.remove('body-popup-active'); // Reverts the body's active state
    }

    // Show the popup
    popup.classList.add('show'); // Displays the pop-up
    body.classList.add('body-popup-active'); // Adds the active state to the body

    if (closeBtn) {
        closeBtn.onclick = closePopup;
    } else {
        console.error('Close button not found');
    }

    window.onclick = function(event) {
        if (event.target === popup) {
            closePopup();
        }
    };
});

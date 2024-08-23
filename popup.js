document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body; // Reference to body element

    // Show the popup
    popup.classList.add('show');
    body.classList.add('body-popup-active'); // Add class to body

    if (closeBtn) {
        closeBtn.onclick = function() {
            console.log('Close button clicked');
            popup.classList.remove('show');
            body.classList.remove('body-popup-active'); // Remove class from body
        };
    } else {
        console.error('Close button not found');
    }

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.classList.remove('show');
            body.classList.remove('body-popup-active'); // Remove class from body
        }
    };
});

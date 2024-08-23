document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');

    // Show the popup
    popup.classList.add('show');

    // Debugging: Log to ensure elements are selected
    console.log('Popup:', popup);
    console.log('Close Button:', closeBtn);

    // Check if close button exists and is working
    if (closeBtn) {
        closeBtn.onclick = function() {
            console.log('Close button clicked');
            popup.classList.remove('show');
        };
    } else {
        console.error('Close button not found');
    }

    // Close the popup if clicking outside of it
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    };
});

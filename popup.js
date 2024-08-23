document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;

    function closePopup() {
        popup.classList.remove('show');
        body.classList.remove('body-popup-active');
    }

    // Show the popup
    popup.classList.add('show');
    body.classList.add('body-popup-active');

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

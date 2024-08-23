document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');

    // Show the popup
    popup.classList.add('show');

    closeBtn.onclick = function() {
        popup.classList.remove('show');
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.classList.remove('show');
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display menu items
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');

            for (const category in data) {
                const section = document.createElement('section');
                section.id = category;
                section.classList.add('menu-section');

                const heading = document.createElement('h2');
                heading.textContent = capitalizeFirstLetter(category.replace(/-/g, ' '));
                section.appendChild(heading);

                data[category].forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('menu-item');

                    const itemName = document.createElement('h3');
                    itemName.textContent = item.name;
                    itemDiv.appendChild(itemName);

                    if (item.description) {
                        const itemDescription = document.createElement('p');
                        itemDescription.textContent = item.description;
                        itemDiv.appendChild(itemDescription);
                    }

                    if (item.price) {
                        const itemPrice = document.createElement('p');
                        itemPrice.classList.add('price'); // Add class for styling
                        itemPrice.textContent = item.price;
                        itemDiv.appendChild(itemPrice);
                    }

                    section.appendChild(itemDiv);
                });

                menuContainer.appendChild(section);
            }
        })
        .catch(error => console.error('Error fetching the menu:', error));

    // Show the pop-up message on page load
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

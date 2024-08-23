document.addEventListener("DOMContentLoaded", function () {
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

                    const itemPrice = document.createElement('p');
                    itemPrice.textContent = item.price;
                    itemDiv.appendChild(itemPrice);

                    if (item.description) {
                        const itemDescription = document.createElement('p');
                        itemDescription.textContent = item.description;
                        itemDiv.appendChild(itemDescription);
                    }

                    section.appendChild(itemDiv);
                });

                menuContainer.appendChild(section);
            }
        })
        .catch(error => console.error('Error fetching the menu:', error));
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

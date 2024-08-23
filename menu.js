document.addEventListener("DOMContentLoaded", () => {
    // Fetch the menu data from menu.json
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');

            // Render food menu first
            renderMenuSection(menuContainer, 'Food', data.food);

            // Render each drink menu section
            renderMenuSection(menuContainer, 'Coffee / Hot Drinks', data['coffee-hot-drinks']);
            renderMenuSection(menuContainer, 'Tea', data.tea);
            renderMenuSection(menuContainer, 'Iced', data.iced);
            renderMenuSection(menuContainer, 'Milkshake', data.milkshake);
            renderMenuSection(menuContainer, 'Fresh Juice', data['fresh-juice']);
            renderMenuSection(menuContainer, 'Smoothie', data.smoothie);
            renderMenuSection(menuContainer, 'Sodas', data.sodas);
        })
        .catch(error => console.error('Error loading menu:', error));
});

// Function to render each menu section
function renderMenuSection(container, sectionName, items) {
    // Create a section title
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = sectionName;
    sectionTitle.classList.add('menu-section-title');
    container.appendChild(sectionTitle);

    // Create a list to hold the menu items
    const itemList = document.createElement('ul');
    itemList.classList.add('menu-list');

    // Loop through the items and create list elements
    items.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('menu-item');

        // Add item name
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemName.classList.add('menu-item-name');

        // Add item price
        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.classList.add('menu-item-price');

        // Add item description if available
        if (item.description) {
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.classList.add('menu-item-description');
            itemElement.appendChild(itemDescription);
        }

        // Append name and price to the list item
        itemElement.appendChild(itemName);
        itemElement.appendChild(itemPrice);

        // Append the list item to the list
        itemList.appendChild(itemElement);
    });

    // Append the list to the container
    container.appendChild(itemList);
}

const cartItems = [
    {
        name: "Hp EliteBook 840 G5 11 pro",
        price: 250000.00,
        description: "Hp EliteBook 840 G5 TOUCHSCREEN Core I5-8GB RAM/256GB",
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/8514062/1.jpg?2207",
        quantity: 1
    },
    {
        name: "Dell Latitude windows 10 pro",
        price: 300000.00,
        description: "FHD-11th Gen Intel Core i5-1135G7 Quad-Core-16GB",
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6363651/1.jpg?0570",
        quantity: 1
    }
];

// DOM Elements
const cartList = document.getElementById('cartList');
const totalItems = document.getElementById('totalItems');
const totalPrice = document.getElementById('totalPrice');

// Function to update the cart display
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        // Create image element
        const itemImg = document.createElement('img');
        itemImg.src = item.image;
        itemImg.alt = item.name;

        // Create text element for item name
        const itemName = document.createElement('p');
        itemName.innerText = item.name;

        // Create text element for item price
        const itemPrice = document.createElement('p');
        itemPrice.innerText = `₦${(item.price * item.quantity).toFixed(2)}`;

        // Create quantity controls
        const quantityDiv = document.createElement('div');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.style.width = '50px';
        quantityInput.readOnly = true; // Make input read-only

        const plusButton = document.createElement('button');
        plusButton.innerText = '+';
        plusButton.onclick = () => {
            item.quantity++;
            updateCart();
        };

        const minusButton = document.createElement('button');
        minusButton.innerText = '-';
        minusButton.onclick = () => {
            if (item.quantity > 1) {
                item.quantity--;
                updateCart();
            }
        };

        // Create like button
        const likeButton = document.createElement('span');
        likeButton.innerText = '❤';
        likeButton.style.cursor = 'pointer';
        likeButton.onclick = () => {
            // Add your like functionality here
            alert(`You liked ${item.name}`);
            likeButton.style.color = 'red'; // Change color to red
        };


        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.onclick = () => {
            cartItems.splice(index, 1);
            updateCart(); 
        };

        quantityDiv.appendChild(minusButton);
        quantityDiv.appendChild(quantityInput);
        quantityDiv.appendChild(plusButton);

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(quantityDiv);
        itemDiv.appendChild(likeButton);
        itemDiv.appendChild(deleteButton);

        cartList.appendChild(itemDiv);

        // Calculate totals
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    totalItems.innerText = itemCount;
    totalPrice.innerText = total.toFixed(2);
}

// Add an event listener to the Checkout button
const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', () => {
    alert('Checkout process started!');
    // Your checkout logic here
});

// Initial update to display cart items
updateCart();

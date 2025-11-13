
let cart = [];
let total = 0;

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute("data-name");
    const price = parseInt(product.getAttribute("data-price"));
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}/day`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total;
}

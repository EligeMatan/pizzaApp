/**
 * Вивід товарів у кошику
 */

let cartItems = [];

export function addToCart(item) {
    cartItems.push(item);
    renderCart();
}

export function renderCart() {
    const cartContainer = document.querySelector('#cart');
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Кошик порожній</p>';
        return;
    }

    const list = document.createElement('ul');
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} – ${item.price} грн`;
        list.appendChild(li);
    });

    cartContainer.appendChild(list);
}
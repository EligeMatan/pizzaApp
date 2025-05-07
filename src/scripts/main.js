// const btns = document.querySelectorAll('[data-category]');
// const productsContainer = document.querySelector('.products-container');

// btns.forEach(btn => btn.addEventListener('click', function (e) {
//     const category = btn.dataset.category;

//     fetch(`./data/db-${category}.json`)
//         .then(res => res.json())
//         .then(data => renderProducts(data))
// }))

// function renderProducts(products) {
//     productsContainer.innerHTML = "";
//     products.forEach(p => {
//         productsContainer.innerHTML += `
//          <div class="product-card">
//             <img src="./src/img/${p.urlImg}" alt="${p.name}">
//             <h3>${p.name}</h3>
//             <p>${p.price}</p>
//             <button>Купити</button>
//         </div>
//         `
//     })
// }

import { loadPizzas } from './scripts/api/loadData.js';
import { renderMenu } from './scripts/ui/renderMenu.js';
import { showLoader, hideLoader } from './scripts/ui/renderLoader.js';
import { renderError } from './scripts/ui/renderError.js';
import { addToCart } from './scripts/ui/renderCart.js';

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', async () => {
    showLoader();

    try {
        const pizzas = await loadPizzas();
        renderMenu('#menu', pizzas); // припускаємо, що в index.html є <div id="menu">

        // Додаємо прослуховувачі на кнопки "Додати"
        document.querySelector('#menu').addEventListener('click', (event) => {
            if (event.target.classList.contains('add-to-cart')) {
                const pizzaId = event.target.dataset.id;
                const pizza = pizzas.find(p => p.id === pizzaId);
                if (pizza) {
                    addToCart(pizza);
                }
            }
        });

    } catch (err) {
        renderError(`Не вдалося завантажити меню: ${err.message}`);
    } finally {
        hideLoader();
    }
});







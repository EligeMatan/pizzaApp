const btns = document.querySelectorAll('[data-category]');
const productsContainer = document.querySelector('.products-container');

btns.forEach(btn => btn.addEventListener('click', function (e) {
    const category = btn.dataset.category;

    fetch(`./data/db-${category}.json`)
        .then(res => res.json())
        .then(data => renderProducts(data))
}))

function renderProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach(p => {
        productsContainer.innerHTML += `
         <div class="product-card">
            <img src="./src/img/${p.urlImg}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button>Купити</button>
        </div>
        `
    })
}







/**
 * Створення HTML-елементу картки товару
 * @param {*} item 
 * @returns 
 */

export function renderItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p class="price">${item.price} грн</p>
      <ul class="components">
        ${item.components.map(comp => `<li>${comp}</li>`).join('')}
      </ul>
      <button data-id="${item.id}" class="add-to-cart">Додати</button>
    `;

    return card;
}
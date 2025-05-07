/**
 * Рендер усього меню
 */

import { renderItemCard } from './renderItemCard.js';

export function renderMenu(containerSelector, items) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; // очистити перед рендером

    items.forEach(item => {
        const card = renderItemCard(item);
        container.appendChild(card);
    });
}
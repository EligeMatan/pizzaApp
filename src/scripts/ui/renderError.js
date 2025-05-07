/**
 * Показ помилок для користувача
 * @param {*} message 
 * @param {*} containerSelector 
 */

export function renderError(message, containerSelector = '#messages') {
    const container = document.querySelector(containerSelector);
    container.innerHTML = `<div class="error">${message}</div>`;
}
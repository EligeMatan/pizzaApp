/**
 * Завантаження JSON-даних
 */

const pathToData = '../../../data/';

export async function loadPizzas() {
    const response = await fetch(`${pathToData}/db-pizzas.json`);

    if (!response.ok) {
        throw new Error('Проблеми з завантаженням меню з піццею');
    }

    return await response.json();
}

export async function loadDrinks() {
    const response = await fetch(`${pathToData}/db-drinks.json`);

    if (!response.ok) {
        throw new Error('Проблеми з завантаженням меню з напоями');
    }

    return await response.json();
}
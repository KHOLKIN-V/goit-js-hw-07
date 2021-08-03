const counterValue = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let counter = 0;


increment.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
});

decrement.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
});
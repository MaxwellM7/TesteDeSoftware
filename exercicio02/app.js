document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    const updateDisplay = () => {
        counterDisplay.textContent = count;
    };

    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    updateDisplay(); // Inicializa o contador com 0
});

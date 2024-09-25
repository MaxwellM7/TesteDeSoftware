describe('Teste de manipulação de DOM - Contador', () => {
    let incrementButton;
    let decrementButton;
    let counter;

    beforeEach(() => {
        document.body.innerHTML = `
            <div>
                <span id="counter">0</span>
            </div>
            <button id="increment">+</button>
            <button id="decrement">-</button>
        `;

        incrementButton = document.getElementById('increment');
        decrementButton = document.getElementById('decrement');
        counter = document.getElementById('counter');

        // Inicializa o contador
        let count = 0;
        counter.textContent = count;

        incrementButton.addEventListener('click', () => {
            count++;
            counter.textContent = count;
        });

        decrementButton.addEventListener('click', () => {
            count--;
            counter.textContent = count;
        });
    });

    test('Deve incrementar o contador ao clicar no botão +', () => {
        incrementButton.click();
        expect(counter.textContent).toBe('1');
        incrementButton.click();
        expect(counter.textContent).toBe('2');
    });

    test('Deve decrementar o contador ao clicar no botão -', () => {
        incrementButton.click(); // Contador: 1
        incrementButton.click(); // Contador: 2
        decrementButton.click(); // Contador: 1
        expect(counter.textContent).toBe('1');
        decrementButton.click(); // Contador: 0
        expect(counter.textContent).toBe('0');
    });
});

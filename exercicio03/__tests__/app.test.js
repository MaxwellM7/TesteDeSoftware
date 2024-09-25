/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Teste de manipulação de DOM - Cronômetro', () => {
    let startButton, timerDisplay;

    beforeEach(() => {
        // Carrega o conteúdo do arquivo HTML para simular o DOM
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        document.documentElement.innerHTML = html;

        // Simula a importação do script app.js que manipula o DOM
        require('../app.js');

        // Seleciona os elementos do DOM necessários para os testes
        startButton = document.getElementById('start');
        timerDisplay = document.getElementById('timerDisplay');
    });

    test('Deve iniciar o cronômetro ao clicar no botão Iniciar', () => {
        jest.useFakeTimers(); // Usar timers falsos
        startButton.click(); // Inicia o cronômetro

        // Avança o tempo em 2000 milissegundos (2 segundos)
        jest.advanceTimersByTime(2000);

        // Verifica se o cronômetro está em 00:00:02
        expect(timerDisplay.textContent).toBe('00:02');

        jest.useRealTimers(); // Retorna aos timers reais
    });
});

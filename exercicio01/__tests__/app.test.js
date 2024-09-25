/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Teste de manipulação de DOM - Soma de valores', () => {
  beforeEach(() => {
    // Carrega o conteúdo do arquivo HTML para simular o DOM
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Simula a importação do script app.js que manipula o DOM
    require('../app.js');
  });

  test('Deve somar corretamente os valores dos inputs e exibir no DOM', () => {
    // Seleciona os inputs e o botão
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const sumBtn = document.getElementById('sum-btn');
    const result = document.getElementById('result');

    // Define valores para os inputs
    input1.value = 50;  // Ajuste os valores conforme necessário
    input2.value = 50;  // Ajuste os valores conforme necessário

    // Simula o clique no botão
    sumBtn.click();

    // Verifica se o resultado exibido no DOM está correto
    expect(result.textContent).toBe('Resultado: 100');  // Esta linha espera o resultado correto
  });
});

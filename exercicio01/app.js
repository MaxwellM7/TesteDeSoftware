document.getElementById('sum-btn').addEventListener('click', function() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const sum = parseFloat(input1) + parseFloat(input2); // Somando os valores dos inputs
  document.getElementById('result').textContent = 'Resultado: ' + sum; // Atualiza o resultado no DOM
});

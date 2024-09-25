let timer;
let seconds = 0;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('start');

function updateDisplay() {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${secs.padStart(2, '0')}`; // Certificando-se de que os segundos têm sempre 2 dígitos
}

startButton.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

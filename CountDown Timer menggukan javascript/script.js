let timeLeft;
let timerId = null;
const timerDisplay = document.getElementById('timer');

function startTimer() {
    if (timerId !== null) return;

    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (timeLeft === undefined) {
        timeLeft = minutes * 60 + seconds;
    }

    if (timeLeft <= 0) return;

    timerId = setInterval(() => {
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            alert('Time is up!');
        }
    }, 1000);
}

function updateTimer() {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}
// reset timer
function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = undefined;
    timerDisplay.textContent = '00:00';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

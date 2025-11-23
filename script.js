// script.js

const startBtn = document.getElementById('start-btn');

if (startBtn) {
  startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index1.html';
  });
}

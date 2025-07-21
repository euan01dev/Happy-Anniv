const scrollButton = document.getElementById('scrollButton');
const messageSection = document.getElementById('messageSection');
const resetButton = document.getElementById('resetButton');
const roseContainer = document.getElementById('rose-container');

scrollButton.addEventListener('click', () => {
  messageSection.classList.add('show');
  setTimeout(() => {
    messageSection.scrollIntoView({ behavior: 'smooth' });
  }, 200);

  resetButton.style.display = 'block';

  const roseInterval = setInterval(() => {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.innerText = '🌹';
    rose.style.left = Math.random() * 90 + '%';
    roseContainer.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 3000);
  }, 100);

  resetButton.onclick = () => {
    clearInterval(roseInterval);
    messageSection.classList.remove('show');
    scrollButton.scrollIntoView({ behavior: 'smooth' });
    resetButton.style.display = 'none';
    roseContainer.innerHTML = '';
  };
});

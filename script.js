const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const catImg = document.getElementById('cat-img');
const question = document.getElementById('question');
const btnGroup = document.getElementById('btn-group');

function dodgeNoButton() {
    noBtn.style.position = 'fixed';

    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Moves away when cursor gets within 75px
document.addEventListener('mousemove', (e) => {
    const rect = noBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
    if (distance < 75) {
        dodgeNoButton();
    }
});

// Mobile touch & hover fallback
noBtn.addEventListener('mouseenter', dodgeNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeNoButton();
});

// Success state uses the uploaded love-cats-cat.gif
yesBtn.addEventListener('click', () => {
    catImg.src = 'love-cats-cat.gif';
    question.textContent = 'Thought you would say no <3';
    btnGroup.style.display = 'none';
    noBtn.style.display = 'none';
});

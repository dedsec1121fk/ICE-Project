// Easter Egg Script
const titleElement = document.getElementById('artist-title');
let clickCount = 0;
let clickTimer = null;

titleElement.addEventListener('click', () => {
    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);
    if (clickCount === 3) {
        window.location.href = 'https://www.ded-sec.space';
        clickCount = 0;
    } else {
        clickTimer = setTimeout(() => { clickCount = 0; }, 800);
    }
});

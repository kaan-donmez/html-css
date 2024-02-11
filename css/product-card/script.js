const card = document.querySelector('.card');
const cardCount = 53;

for (let i = 0; i < cardCount; i++) {
    const clone = card.cloneNode(true);
    card.parentNode.appendChild(clone);
}
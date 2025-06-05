document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('flipped');
    });
});

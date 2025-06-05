document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    // The frontCard and backCard variables are not strictly necessary for the flip,
    // but they were in the original code, so keeping them for consistency
    const frontCard = document.querySelector('.front-card');
    const backCard = document.querySelector('.back-card');

    // This event listener toggles the 'flipped' class on the card-container
    // when any part of the card-container is clicked.
    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('flipped');
    });

    // Note: The on-hover effect for the background image is now handled purely in CSS
    // using the ::before pseudo-element and opacity transitions, as per your last request.
    // So, no JavaScript is needed for that specific hover effect.
});
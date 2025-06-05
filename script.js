document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const frontCard = document.querySelector('.front-card');
    const backCard = document.querySelector('.back-card');

    // To simulate a "flip" on click for demonstration.
    // You might want to trigger this based on other interactions in a real scenario.
    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('flipped');
    });

    // Handle the background image on hover for the front card
    // The CSS handles the visual change, but if you needed more complex JS,
    // you would add event listeners here.
    // For now, the CSS for `.front-card:hover .background-overlay` is sufficient for a subtle change.
});
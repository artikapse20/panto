document.addEventListener('DOMContentLoaded', () => {
    // Testimonials Slider
    const reviewsContainer = document.querySelector('.reviews-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        reviewsContainer.scrollBy({ left: -330, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        reviewsContainer.scrollBy({ left: 330, behavior: 'smooth' });
    });

    // Product Tabs
    const tabButtons = document.querySelectorAll('.product-tabs button');
    const productCards = document.querySelectorAll('.product-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            // Show/hide product cards based on category
            productCards.forEach(card => {
                if (card.dataset.category === category || category === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
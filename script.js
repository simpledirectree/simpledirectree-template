// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Business Directory loaded!');

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optional: Add click tracking for analytics
    const listingCards = document.querySelectorAll('.listing-card');
    listingCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only log if not clicking on a link
            if (e.target.tagName !== 'A') {
                const businessName = this.querySelector('h3').textContent;
                console.log(`Viewed: ${businessName}`);
            }
        });
    });

    // Optional: Add link click tracking
    const links = document.querySelectorAll('.listing-info a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const businessName = this.closest('.listing-card').querySelector('h3').textContent;
            const linkType = this.href.includes('tel:') ? 'phone' : 'website';
            console.log(`${linkType} clicked for: ${businessName}`);
        });
    });
});
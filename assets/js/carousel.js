document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    document.querySelectorAll('.simple-carousel').forEach(function(carousel) {
        const track = carousel.querySelector('.simple-carousel-track');
        const slides = Array.from(track.children);
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
        let currentIndex = 0;

        // If only one slide, disable navigation
        if (slides.length <= 1) {
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = true;
            return;
        }

        // Function to go to a specific slide
        function goToSlide(index) {
            currentIndex = (index + slides.length) % slides.length;
            track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }

        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        }

        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToSlide(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                goToSlide(currentIndex + 1);
            }
        });

        // Optional: Auto-play (uncomment to enable)
        /*
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
        */
    });
});

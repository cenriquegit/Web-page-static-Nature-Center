let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.querySelector('.slider');
        const slideWidth = slides[0].clientWidth;
        let autoSlideInterval;

        function showSlide(index) {
            const offset = -index * slideWidth;
            slider.style.transform = `translateX(${offset}px)`;
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        document.addEventListener('DOMContentLoaded', () => {
            startAutoSlide(); // Iniciar el slider automático al cargar la página
        });




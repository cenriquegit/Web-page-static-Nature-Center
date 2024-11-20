let currentIndex = 0;
const slides = document.querySelectorAll('.item__slider');
const dots = document.querySelectorAll('.dot__categori');
const totalSlides = slides.length;

function changeSlide() {
    // Mover el carrusel al siguiente slide
    currentIndex = (currentIndex + 1) % totalSlides;

    // Aplicar la transformación para mover el carrusel
    document.querySelector('.container__slider').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar los puntos de navegación
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Cambiar slide cada 3 segundos
setInterval(changeSlide, 3000);
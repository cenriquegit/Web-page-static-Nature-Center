let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Función para mostrar la imagen actual
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Mover el slider
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Actualizar los puntos de navegación
    dots.forEach((dot, i) => {
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Función para ir al siguiente slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Función para ir al slide anterior
function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Función para seleccionar un slide mediante un punto
function currentSlide(index) {
    showSlide(index - 1);
}

// Inicializar el slider
showSlide(currentSlideIndex);
//Fu ncion para el contador de cantidad de los mas vendidos
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones de cantidad
    const quantityControls = document.querySelectorAll('.quantity-control');

    quantityControls.forEach(control => {
        const minusButton = control.querySelector('.minus');
        const plusButton = control.querySelector('.plus');
        const quantitySpan = control.querySelector('.quantity');

        minusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 1) {
                quantitySpan.textContent = currentQuantity - 1;
            }
        });

        plusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = currentQuantity + 1;
        });
    });
});
//funcion para los botones del carrusel
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los botones de navegación
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imageContainer = document.querySelector('.image-container');

    // Define el tamaño del desplazamiento
    const scrollAmount = 220; // Cambia el valor según el tamaño de los elementos del carrusel

    // Función para desplazar hacia la izquierda
    prevBtn.addEventListener('click', () => {
        imageContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    // Función para desplazar hacia la derecha
    nextBtn.addEventListener('click', () => {
        imageContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

const carouselWrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  function moveToNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  setInterval(moveToNext, 3000); // Cambiar cada 3 segundos (ajusta según tus necesidades)
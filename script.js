let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function mostrarSlide(i) {
    const slidesContainer = document.querySelector('.row1');
    if (i >= totalSlides) {
        index = 0;
    } else if (i < 0) {
        index = totalSlides - 1;
    } else {
        index = i;
    }
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function mudarSlide(direction) {
    mostrarSlide(index + direction);
}

// Navegação automática
setInterval(() => {
    mudarSlide(1);
}, 3000); // Muda a imagem a cada 3 segundos


    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const totalImages = images.length;

    function showSlide(index) {
        // A lógica para mostrar a imagem
        const sliderWrapper = document.querySelector('.slider-wrapper');
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showSlide(currentIndex);
    }

    // Alternância automática a cada 3 segundos
    setInterval(nextSlide, 3000);

// Função para alternar a classe 'active' no menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');  // Alterna a visibilidade do menu
}

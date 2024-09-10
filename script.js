let currentIndex = 0; // Índice actual del carrusel
const figures = document.querySelectorAll('#carousel figure'); // Selecciona todas las figuras

// Función para girar el carrusel
function rotateCarousel() {
    // Calcula el grado de rotación total
    const rotationDegree = (currentIndex + 1) * 72; // Cada figura se rota 72 grados
    figures.forEach((figure, index) => {
        // Aplica la rotación a cada figura
        figure.style.transform = `rotateY(${rotationDegree + index * 72}deg) translateZ(150px)`;
    });
    currentIndex = (currentIndex + 1) % figures.length; // Incrementa el índice y lo reinicia si es necesario
}

// Agrega evento de clic a cada figura
figures.forEach(figure => {
    figure.addEventListener('click', rotateCarousel);
});

/**
 * currentIndex: Mantiene el índice de la imagen actualmente visible.
rotateCarousel: Esta función se llama cada vez que se hace clic en una imagen. 
Calcula el nuevo ángulo de rotación para cada figura, haciendo que cada imagen gire completamente.
Event Listener: Se agrega un evento de clic a cada figura que llama a la función rotateCarousel.
 */

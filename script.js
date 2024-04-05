// Crear gotas de lluvia con la imagen
function createRain() {
    const container = document.querySelector('.rain-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < 50; i++) {
        let rainDrop = document.createElement('div');
        rainDrop.className = 'rain';
        rainDrop.style.left = Math.random() * containerWidth + 'px';
        rainDrop.style.top = Math.random() * containerHeight + 'px';
        container.appendChild(rainDrop);
    }
}

// Iniciar lluvia al cargar la página
window.onload = function() {
    createRain();
};

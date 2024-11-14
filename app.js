const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pixel = { x: canvas.width / 2, y: canvas.height / 2 };

document.addEventListener('keydown', (event) => {
    const step = 5;
    switch (event.key) {
        case 'ArrowUp':
            pixel.y -= step;
            break;
        case 'ArrowDown':
            pixel.y += step;
            break;
        case 'ArrowLeft':
            pixel.x -= step;
            break;
        case 'ArrowRight':
            pixel.x += step;
            break;
    }
    updateCanvas();
});

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(pixel.x, pixel.y, 1, 1);
}

updateCanvas();

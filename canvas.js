const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');


canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;


ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;

function getPosition(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
    y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
  };
}

function scratch(e) {
  e.preventDefault();
  const pos = getPosition(e);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 15, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', (e) => { if (isDrawing) scratch(e); });

canvas.addEventListener('touchstart', () => isDrawing = true);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchmove', (e) => { if (isDrawing) scratch(e); });
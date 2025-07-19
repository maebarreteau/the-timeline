
(() => {
  const correctOrder = [
    "00.jpg", "01.jpg", "02.jpg",
    "10.jpg", "11.jpg", "12.jpg",
    "20.jpg", "21.jpg", "22.jpg"
  ];

  let dragged; // élément qu’on déplace

  document.querySelectorAll('#puzzle img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
      dragged = e.target;
      e.target.classList.add('dragging');
    });

    img.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });

    img.addEventListener('dragover', (e) => {
      e.preventDefault(); // nécessaire pour autoriser le drop
    });

    img.addEventListener('drop', (e) => {
      e.preventDefault();
      if (dragged !== e.target) {
        // échanger les src
        const temp = dragged.src;
        dragged.src = e.target.src;
        e.target.src = temp;
      }
    });
  });

  function checkPuzzle() {
    const imgs = document.querySelectorAll('#puzzle img');
    let isCorrect = true;
    imgs.forEach((img, i) => {
      if (!img.src.includes(correctOrder[i])) {
        isCorrect = false;
      }
    });
    const result = document.getElementById("result");
    if (isCorrect) {
      result.textContent = "🔮 Bravo, puzzle complété !";
      result.style.color = "green";
    } else {
      result.textContent = "Ce n’est pas encore ça…";
      result.style.color = "red";
    }
  }

  window.checkPuzzle = checkPuzzle;
})();

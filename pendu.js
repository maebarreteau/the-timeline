const secret = "3572"; 
let found = Array(secret.length).fill(false);
let maxErrors = 4;
let errors = 0;

const wordDiv = document.getElementById('word');
const numbersDiv = document.getElementById('numbers');
const errorsSpan = document.getElementById('errors');
const messageP = document.getElementById('message');


function updateWord() {
  wordDiv.innerHTML = '';
  for (let i = 0; i < secret.length; i++) {
    const span = document.createElement('span');
    span.textContent = found[i] ? secret[i] : '';
    wordDiv.appendChild(span);
  }
}


for (let i = 0; i <= 9; i++) {
  const btn = document.createElement('button');
  btn.textContent = i;
    
btn.onclick = function() {
    this.disabled = true;  
    guess(i);;
  } 
  numbersDiv.appendChild(btn);
}


function guess(num) {
  let good = false;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] == num && !found[i]) {
      found[i] = true;
      good = true;
    }
  }
  if (!good) {
    errors++;
    errorsSpan.textContent = errors;
  }
  updateWord();
  checkWinLose();
}

function checkWinLose() {
  if (found.every(v => v)) {
    messageP.textContent = "Good. May be the date of the end of the world.";
    disableButtons();
  } else if (errors >= maxErrors) {
    messageP.textContent = "It's not the right code. Try again.";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('#numbers button').forEach(btn => btn.disabled = true);
}

updateWord();

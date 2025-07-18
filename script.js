document.querySelectorAll('.event.locked').forEach(function(event) {
  event.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    var code = this.dataset.code; 
    var target = this.dataset.target; 
    var userCode = prompt("Cet événement est verrouillé. Entrez le code pour continuer :");

    if(userCode === code) {
      window.location.href = target;
    } else {
      alert("Code incorrect !");
    }
  })
})

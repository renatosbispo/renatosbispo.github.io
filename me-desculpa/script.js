let chocolatePieces = document.querySelectorAll('.chocolate-piece');

for (let piece of chocolatePieces) {
  piece.addEventListener('click', (e) => {
    e.target.classList.toggle('eaten');
  });
}
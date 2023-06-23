const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', animateCell);
});

function animateCell() {
  this.classList.add('animate');
  setTimeout(() => {
    this.classList.remove('animate');
  }, 1000);
}

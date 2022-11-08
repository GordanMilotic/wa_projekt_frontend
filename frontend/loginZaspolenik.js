const button = document.querySelector('.zaposlenik');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.style.width='120px';
});
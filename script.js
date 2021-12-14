const container = document.querySelector('.container');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', () => {
  container.classList.toggle('dark');
});

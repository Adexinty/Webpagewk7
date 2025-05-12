function triggerAnimation(card) {
  card.classList.add('active');
  setTimeout(() => {
    card.classList.remove('active');
  }, 600); // Match animation duration
}

function changeTheme(theme) {
  const body = document.body;
  body.classList.remove('light-theme', 'dark-theme', 'yellow-theme', 'gray-theme');
  body.classList.add(`${theme}-theme`);
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const selector = document.querySelector('.theme-selector');
  document.body.classList.add(`${savedTheme}-theme`);
  selector.value = savedTheme;
}

window.onload = loadTheme;

const themeToggle = document.getElementById('themeToggle');
const root = document.body;
const DARK_CLASS = 'dark-mode';

const storedTheme = localStorage.getItem('site-theme');

function updateTheme(mode) {
  if (mode === 'dark') {
    root.classList.add(DARK_CLASS);
    themeToggle.textContent = 'Modo claro';
  } else {
    root.classList.remove(DARK_CLASS);
    themeToggle.textContent = 'Modo oscuro';
  }
}

function getPreferredTheme() {
  if (storedTheme) return storedTheme;
  return 'light';
}

updateTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const isDark = root.classList.toggle(DARK_CLASS);
  const nextTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('site-theme', nextTheme);
  updateTheme(nextTheme);
});

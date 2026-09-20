const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const menuFilters = document.querySelectorAll('.menu-filter');
const menuCards = document.querySelectorAll('.menu-card');

menuFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selectedCategory = filter.dataset.filter;

    menuFilters.forEach((item) => item.classList.toggle('is-active', item === filter));
    menuCards.forEach((card) => {
      card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
    });
  });
});

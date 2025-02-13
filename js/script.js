const header = document.getElementById('sticky-header');
const scrollContainer = document.querySelector('.image-scroll');
const footerMenuList = document.getElementById('footer-menu-list');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 200);
});

scrollContainer.querySelectorAll('img').forEach(image => {
  scrollContainer.appendChild(image.cloneNode(true));
});

[
  { href: 'index.html', text: 'Home' },
  { href: 'case-study.html', text: 'Case Study' },
  { href: '', text: 'Testimonials' },
  { href: '', text: 'About Me' }
].forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${item.href}">${item.text}</a>`;
  footerMenuList.appendChild(li);
});

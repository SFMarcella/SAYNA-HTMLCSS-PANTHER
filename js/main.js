let right = document.getElementById('chevron_right');
let left = document.getElementById('chevron_left');
let scroll = document.querySelector('.scroll');
let scrollContainer = scroll.parentElement;
let scrollWidth = scroll.scrollWidth;
let containerWidth = scrollContainer.offsetWidth;
let scrollPosition = 0;

right.addEventListener('click', (e) => {
  scrollPosition += containerWidth;
  if (scrollPosition > scrollWidth - containerWidth) {
    scrollPosition = scrollWidth - containerWidth;
  }
  scroll.style.transform = `translateX(-${scrollPosition}px)`;
});

left.addEventListener('click', (e) => {
  scrollPosition -= containerWidth;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  scroll.style.transform = `translateX(-${scrollPosition}px)`;
});

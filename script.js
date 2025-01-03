// Add event listener to the scroll arrow
document.getElementById('scroll-arrow').addEventListener('click', scrollToTop);

document.addEventListener('contextmenu', event => event.preventDefault());

const elements = document.querySelectorAll('.no-select');

elements.forEach(element => {
  element.addEventListener('contextmenu', event => event.preventDefault());
  element.addEventListener('mousedown', event => event.preventDefault());
  element.addEventListener('selectstart', event => event.preventDefault());
});

document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      event.preventDefault();
    }
});
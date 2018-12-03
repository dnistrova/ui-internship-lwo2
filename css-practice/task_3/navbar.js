window.addEventListener('scroll', function() {
  const header = document.getElementsByTagName('header')[0];
  if (pageYOffset > 1) {
    header.classList.add('scrolling-header');
  } else {
    header.classList.remove('scrolling-header');
  }
});

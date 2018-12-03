let slideIndex = [1, 1];
const slideId = ['slide', 'slide-2'];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  const x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('show-comment');
  }
  x[slideIndex[no]-1].classList.add('show-comment');
}

const prev = document.getElementsByClassName('prev');
const next = document.getElementsByClassName('next');

for (let i = 0; i < prev.length; i++) {
  prev[i].onclick = function() {
    plusSlides(-1, i);
  };
}
for (let j = 0; j < next.length; j++) {
  next[j].onclick = function() {
    plusSlides(1, j);
  };
}

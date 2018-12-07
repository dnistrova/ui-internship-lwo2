let slideIndex = [1, 1];
const slideId = ['slide', 'slide-2'];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  const activeSlider = Array.from(document.getElementsByClassName(slideId[no]));
  if (n > activeSlider.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = activeSlider.length;
  }
  activeSlider.forEach((element) => {
    element.classList.remove('show-comment');
  });
  activeSlider[slideIndex[no]-1].classList.add('show-comment');
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

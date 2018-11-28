const video = document.getElementsByClassName('main-video')[0];
const videoBtn = document.getElementsByClassName('play-mode')[0];
const formInput = document.querySelectorAll('input');
const inputs = Array.from(formInput);
const form = document.forms[0];
const tryNowBtn = document.getElementById('form-button');

function pauseVideo() {
  if (!video.paused) {
    video.pause();
    videoBtn.classList.remove('play');
    videoBtn.classList.add('pause');
  } else {
    video.play();
    videoBtn.classList.add('play');
    videoBtn.classList.remove('pause');
  }
}

videoBtn.addEventListener('click', pauseVideo);

function validatePattern(event) {
  const element = event.target;
  if (!element.validity) return;
  if (element.validity.patternMismatch || element.value === '' || element.value == null) {
    element.classList.remove('valid');
    element.classList.add('invalid');
  } else {
    element.classList.remove('invalid');
    element.classList.add('valid');
  }
}

form.addEventListener('keyup', validatePattern, true);
function notDisabled() {
  if (inputs.every((el) => el.classList.contains('valid'))) {
    tryNowBtn.classList.remove('disabled');
  }
}
// tryNowBtn.addEventListener('click', notDisabled);
form.addEventListener('keyup', notDisabled, true);

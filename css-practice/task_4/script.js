const video = document.getElementsByClassName('main-video')[0];
const videoBtn = document.getElementsByClassName('play-mode')[0];

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

const form = document.forms[0];
form.addEventListener('blur', validatePattern, true);

function isValid(element, index, array) {
  return element = document.querySelector('input').classList.contains('valid');
}

const formInput = document.querySelectorAll('input');
const tryNowBtn = document.getElementById('form-button');

function notDisabled() {
  if (Array.from(formInput).every(isValid)) {
    tryNowBtn.classList.remove('disabled');
  }
}

tryNowBtn.addEventListener('click', notDisabled);

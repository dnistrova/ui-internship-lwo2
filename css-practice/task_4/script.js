const videoModule = (function () {
  const video = document.getElementsByClassName('main-video')[0];
  const videoBtn = document.getElementsByClassName('play-mode')[0];

  function pauseVideo() {
    video.pause();
    videoBtn.classList.add('play');
    videoBtn.classList.remove('pause');
  }

  function playVideo() {
    video.play();
    videoBtn.classList.remove('play');
    videoBtn.classList.add('pause');
  }

  function videoPlayer() {
    if (!video.paused) {
      pauseVideo();
    } else {
      playVideo();
    }
  }
  
  return {
    init: () => {
      videoBtn.addEventListener('click', videoPlayer);
    },
  };
})();

videoModule.init();

const formValidationModule = (function () {
  const form = document.forms[0];
  const formInput = form.querySelectorAll('input');
  const inputs = Array.from(formInput);
  const tryNowBtn = document.getElementById('form-button');

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
    const validInputs = inputs.every((el) => el.classList.contains('valid'));

    if (validInputs) {
      tryNowBtn.classList.remove('disabled');
    } else {
      tryNowBtn.classList.add('disabled');
    }
  }

  return {
    init: () => {
      form.addEventListener('keyup', notDisabled, true);
    },
  };
})();

formValidationModule.init();

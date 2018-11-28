function validatePattern(event) {
  const element = event.target;
  if (!element.validity) return;

  if (
    element.validity.patternMismatch ||
    element.value === '' ||
    element.value == null
  ) {
    element.classList.remove('valid');
    element.classList.add('invalid');
  } else {
    element.classList.remove('invalid');
    element.classList.add('valid');
  }
}

const forms = document.getElementsByClassName('validated-form');

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('blur', validatePattern, true);
}

const tabs = document.getElementsByClassName('tabs')[0];
tabs.addEventListener('click', (evt) => activateTab(evt));

function activateTab (evt) {
  const tab = evt.target;
  const dataId = tab.getAttribute('data-id');

  const tabDescriptions = document.getElementsByClassName('tab-description');
  const tabs = document.getElementsByClassName('tab');

  for (let i = 0; i < tabs.length; i++) {
    tabDescriptions[i].classList.remove('active');
    tabs[i].classList.remove('active');
  }

  const activeTabDescription = document.getElementById(dataId);
  activeTabDescription.classList.add('active');
  tab.classList.add('active');
}

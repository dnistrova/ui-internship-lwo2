function validatePattern(event) {
  const element=event.target;
  if (element.validity) {
    if (element.validity.patternMismatch) {
      element.style.borderBottom = '1px solid red';
    } else {
      element.style.borderBottom = '1px solid green';
    }
  }
}

const headerInputs = document.forms['header-form'].elements;
for (let i = 0; i < headerInputs.length; i++) {
  headerInputs[i].addEventListener('blur', validatePattern, false);
}

const footerInputs = document.forms['footer-form'].elements;
for (let i = 0; i < footerInputs.length; i++) {
  footerInputs[i].addEventListener('blur', validatePattern, false);
}

function activateTab(evt, tabNum) {
  const tabdescription = document.getElementsByClassName('tab-description');
  for (let i = 0; i < tabdescription.length; i++) {
    tabdescription[i].style.display = 'none';
  }
  const tablinks = document.getElementsByClassName('tab');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabNum).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('default-open').click();


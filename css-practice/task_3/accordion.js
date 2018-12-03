const acc = document.getElementsByClassName('accordion-heading');
const panel = document.getElementsByClassName('panel');

for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    const setClasses = !this.classList.contains('active');
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');

    if (setClasses) {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    }
  };
}

function setClass(els, className, fnName) {
  for (let i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}

document.getElementsByClassName('default-open')[0].click();
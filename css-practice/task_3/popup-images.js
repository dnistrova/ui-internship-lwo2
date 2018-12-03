const modal = document.getElementById('myModal');
const images = document.getElementsByClassName('popup-image');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function() {
    modal.classList.add('show-image');
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.classList.remove('show-image');
};

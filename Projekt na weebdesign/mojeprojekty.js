var images = ['img/img1.png', 'img/img2.png', 'img/img3.png', 'img/img4.jpg', 'img/img5.jpg',
 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg'];
var currentImageIndex = 0;

function showPrev() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  document.getElementById('current').src = images[currentImageIndex];
  document.getElementById('current').classList.add('fadeOut');
  setTimeout(() => {
      document.getElementById('current').classList.remove('fadeOut');
  }, 500);
}

function showNext() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById('current').src = images[currentImageIndex];
  document.getElementById('current').classList.add('fadeOut');
  setTimeout(() => {
      document.getElementById('current').classList.remove('fadeOut');
  }, 500);
}
var prevButton = document.getElementById('prev');
prevButton.addEventListener('click', showPrev);

var nextButton = document.getElementById('next');
nextButton.addEventListener('click', showNext);

setInterval(showNext, 5000); // wywołaj showNext co 3 sekundy

  
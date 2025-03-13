const slideshowImages = [
  'summer1.jpg',
  'winter1.jpg',
  'summer2.jpg',
  'winter2.jpg'
];
let currentImageIndex = 0;

function updateSlideshow() {
  const slideshow = document.querySelector('.slideshow');
  // フェードアウト
  slideshow.style.transition = 'opacity 1s ease';
  slideshow.style.opacity = 0;
  
  setTimeout(() => {
      slideshow.style.background = `url('${slideshowImages[currentImageIndex]}') no-repeat center/contain`;
      slideshow.style.transition = 'opacity 1s ease';
      slideshow.style.opacity = 1;
      currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
      setTimeout(updateSlideshow, 4000);
  }, 1000);
}
document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.querySelector('.slideshow');
  slideshow.style.background = `url('${slideshowImages[0]}') no-repeat center/contain`;
  slideshow.style.opacity = 1;
  currentImageIndex = 1;
  setTimeout(updateSlideshow, 4000);
});


// ページ読み込み時のフェードイン
window.onload = function() {
  document.querySelector('.hero').style.opacity = 0;
  setTimeout(() => {
      document.querySelector('.hero').style.transition = "opacity 1s ease";
      document.querySelector('.hero').style.opacity = 1;
  }, 100);
};

// ボタンのクリックエフェクト
document.querySelector('.btn').addEventListener('click', function() {
  this.style.boxShadow = "0 0 15px #ff4444";
  setTimeout(() => {
      this.style.boxShadow = "none";
  }, 300);
});
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "pics/pic1.jpg",
    "pics/pic2.jpg",
    "pics/pic4.jpg"
  ];

  let currentIndex = 0;
  const sliderImage = document.getElementById("slider-image");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
  }, 5000); // 5 
});

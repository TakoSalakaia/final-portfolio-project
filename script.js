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


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function fillBarsOnScroll() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    if (isInViewport(bar) && !bar.classList.contains('filled')) {
      const target = bar.getAttribute('data-percent');
      bar.style.width = target;
      bar.classList.add('filled');
    }
  });
}

window.addEventListener('scroll', fillBarsOnScroll);
document.addEventListener('DOMContentLoaded', fillBarsOnScroll);

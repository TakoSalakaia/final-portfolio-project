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


document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..",
      img: "pics/d3.svg",
      name: "Anna Williams",
      job: "UI/UX Specialist"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..",
      img: "pics/d5.svg",
      name: "John Smith",
      job: "Web Developer"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..",
      img: "pics/d4.svg",
      name: "Saba Lopez",
      job: "Project Manager"
    }
  ];

  const textLeft = document.querySelector(".review-paragraph");
  const photo = document.querySelector(".photo-border img");
  const userName = document.querySelector(".user-fullname");
  const userJob = document.querySelector(".user-position");
  const dots = document.querySelectorAll(".nav-dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");

      textLeft.textContent = slides[index].text;
      photo.src = slides[index].img;
      userName.textContent = slides[index].name;
      userJob.textContent = slides[index].job;
    });
  });
});

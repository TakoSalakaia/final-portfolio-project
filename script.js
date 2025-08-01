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

document.addEventListener("DOMContentLoaded", () => {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const selectedCategory = button.dataset.filter;

      projectCards.forEach(card => {
        const cardGroup = card.dataset.group;
        card.style.display = selectedCategory === "all" || selectedCategory === cardGroup ? "block" : "none";
      });
    });
  });

}); 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contact");
    const modal = document.getElementById("modal-contact");

    if (!form || !modal) {
        console.error("ფორმა ან მოდალი ვერ მოიძებნა.");
        return;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("input-name").value.trim();
        const email = document.getElementById("input-email").value.trim();
        const website = document.getElementById("input-website").value.trim();
        const message = document.getElementById("input-message").value.trim();

        const formData = {
            name,
            email,
            website,
            message
        };

        try {
            const response = await fetch("https://borjomi.loremipsum.ge/api/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.status === 1) {
                modal.style.display = "flex"; 
            } else {
                alert("გაგზავნის შეცდომა: " + result.desc);
            }

        } catch (error) {
            console.error("შეცდომა მოხდა:", error);

            //jsonplaceholder
            const fallbackData = {
                title: name,
                body: message,
                userId: 1
            };

            try {
                const fallbackRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(fallbackData)
                });

                if (fallbackRes.ok) {
                    modal.style.display = "flex";
                } else {
                    alert("სარეზერვო გაგზავნაც ვერ მოხერხდა.");
                }
            } catch (fallbackErr) {
                alert("ვერცერთი გაგზავნა ვერ მოხერხდა.");
            }
        }
    });
});

function closeCustomModal() {
    const modal = document.getElementById("modal-contact");
    if (modal) {
        modal.style.display = "none";
    }
}

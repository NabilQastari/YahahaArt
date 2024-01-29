!(function () {
  window;
  const e = document.documentElement;
  if (
    (e.classList.remove("no-js"),
    e.classList.add("js"),
    document.body.classList.contains("has-animations"))
  ) {
    (window.sr = ScrollReveal()).reveal(".reveal-on-scroll", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 100,
    });
  }
})();

const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  const particles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  function createParticles() {
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
      particle.update();
      particle.draw();
    }

    requestAnimationFrame(animateParticles);
  }

  createParticles();
  animateParticles();

  document.addEventListener("DOMContentLoaded", function() {
    var header1 = document.querySelector("header1");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        header1.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
});

//   document.addEventListener("DOMContentLoaded", function() {
//     var header = document.querySelector("header1");

//     window.addEventListener("scroll", function() {
//         var scrollPosition = window.scrollY;

//         // You can customize the conditions and colors based on your preference
//         if (scrollPosition > 100) {
//             header.style.background = "linear-gradient(to bottom, #4a4a4a, #0f0f0f)";
//         } else {
//             header.style.background = "linear-gradient(to bottom, #6c6c6c, #1d1d1d)";
//         }
//     });
// });
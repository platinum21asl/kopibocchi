// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Keitka Menu di klik

document.querySelector("#kopi-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const kopi = document.querySelector("#kopi-menu");

document.addEventListener("click", function (e) {
  if (!kopi.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

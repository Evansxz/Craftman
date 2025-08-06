// Tombol active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Background otomatis untuk hero section
const hero = document.querySelector('.hero');

// Daftar gambar background
const backgrounds = [
  'assets/Hero1.jpg',
  'assets/Hero2.jpg',
  'assets/Hero3.jpg'
];

let currentBackground = 0;
const delay = 5000; // jeda 5 detik

function changeBackground() {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  hero.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
}

// Mulai pergantian otomatis setelah load
setInterval(changeBackground, delay);


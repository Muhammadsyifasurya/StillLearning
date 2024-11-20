const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
const totalCards = document.querySelectorAll(".card").length;

// Next Button
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * 340}px)`; // Offset each card's width + gap
  }
});

// Prev Button
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * 340}px)`; // Offset each card's width + gap
  }
});

function toggleMenu(element) {
  const navList = document.querySelector(".nav-list");
  const isVisible = navList.classList.toggle("show");
  element.classList.toggle("active"); // Mengubah tampilan hamburger menjadi silang

  console.log("Hamburger clicked");
  console.log("Nav list is visible:", isVisible);
}

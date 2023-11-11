var slides = document.querySelectorAll(".slide");
var radioButtons = document.querySelectorAll(".radioButton");
let currentSlide = 1;

var manualNavigation = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    radioButtons.forEach((radioButton) => {
      radioButton.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  radioButtons[manual].classList.add("active");
};

radioButtons.forEach((radioButton, i) => {
  radioButton.addEventListener("click", () => {
    manualNavigation(i);
    currentSlide = i;
  });
});

photo = document.querySelector(".photo");
progressText = document.querySelector(".progressText");

let load = 0;

let interval = setInterval(updateBlur, 30);

function updateBlur() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  progressText.innerHTML = `${load}%`;
  progressText.style.opacity = scale(load, 0, 100, 1, 0);
  photo.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

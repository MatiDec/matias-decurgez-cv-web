document.addEventListener("click", (e) => {
  const wave = document.createElement("span");
  wave.classList.add("wave-effect");

  document.body.appendChild(wave);

  const size = wave.getBoundingClientRect();
  const halfW = size.width / 2;
  const halfH = size.height / 2;

  wave.style.left = `${e.clientX - halfW}px`;
  wave.style.top = `${e.clientY - halfH}px`;

  wave.addEventListener("animationend", () => {
    wave.remove();
  });
});

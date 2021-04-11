const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.top = yInside + "px";
    ripple.style.left = xInside + "px";

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

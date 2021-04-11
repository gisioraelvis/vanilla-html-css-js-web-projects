const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const trigglerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const trigglerTop = box.getBoundingClientRect().top;
    if (trigglerTop < trigglerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

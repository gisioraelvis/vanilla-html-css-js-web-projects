const header = document.querySelector(".header");
const nav = document.querySelector(".nav")
window.addEventListener("scroll", fixheader);

function fixheader() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active");
    nav.classList.add("active");
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");

  }
  console.log(header)
}



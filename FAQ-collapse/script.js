const toggleBtn = document.querySelectorAll(".faq-toggle");
const faqAccordion = document.querySelectorAll(".faq");

toggleBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.parentNode.classList.contains("active")){
       button.parentNode.classList.remove("active")
    }
    else{
      removeActive();
      button.parentNode.classList.add("active")
    }
    

  });
});

function removeActive() {
  faqAccordion.forEach((faq) => {
    faq.classList.remove("active");
  });
}

const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition: ${idx * 200}ms;">${letter}</span>`
    )
    .join("");
});

const tagEls = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    genRandomTag();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagEls.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagEls.appendChild(tagEl);

  });
}

function genRandomTag() {
  let pickedTag = pickRandomTag();
  console.log(pickedTag)
  highlightTag(pickedTag);
}

function pickRandomTag() {
  let tagList = document.querySelectorAll(".tag");
  return tagList[Math.floor(Math.random() * tagList.length)];
}

function highlightTag(pickedTag) {
  pickedTag.classList.add("highlight");
}

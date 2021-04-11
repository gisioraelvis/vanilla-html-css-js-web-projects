const counterElements = document.querySelectorAll(".counter");

counterElements.forEach((counter) => {
  const targetValue = +counter.getAttribute("data-target");
  let initialValue = counter.innerText;
  let increment = targetValue / 100;

  const updateCounter = () => {
    initialValue = +counter.innerText;
    if (initialValue < targetValue) {
      counter.innerText = `${Math.ceil(increment + initialValue)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = targetValue;
    }
  };

  updateCounter();
});

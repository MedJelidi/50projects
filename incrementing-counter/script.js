const numbers = document.querySelectorAll(".number");

numbers.forEach((n) => {
  n.innerText = "0";
  const target = +n.getAttribute("data-target");
  const updateCounter = () => {
    const c = +n.innerText;
    if (c < target) {
      n.innerText = Math.ceil(c + target / 200);
      setTimeout(updateCounter, 1);
    } else {
      n.innerText = target;
    }
  };
  updateCounter();
});

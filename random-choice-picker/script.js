const textarea = document.getElementById("textarea");
let random;

textarea.addEventListener("keydown", (ev) => {
  if (ev.code === "Enter") {
    textarea.disabled = true;
    const choices = document.querySelectorAll(".choice");
    if (random !== undefined) switchHighlights(choices, random);
    const interval = setInterval(() => {
      random = Math.floor(Math.random() * choices.length);
      switchHighlights(choices, random);
      setTimeout(() => {
        switchHighlights(choices, random);
      }, 100);
    }, 150);
    setTimeout(() => {
      clearInterval(interval);
      textarea.disabled = false;
      switchHighlights(choices, random);
      textarea.focus();
    }, 3000);
  }
});

function switchHighlights(choices, random) {
  choices[random].classList.toggle("choice-selected");
  choices[random].classList.toggle("not-selected-choice");
}

function onType() {
  let choices = textarea.value;
  choices = choices.split(",").filter((c) => c.trim());
  const choicesContainer = document.querySelector(".choices");
  choicesContainer.textContent = "";
  choices.forEach((c) => {
    const choiceNode = document.createElement("div");
    choiceNode.classList.add(...["choice", "not-selected-choice"]);
    const choiceText = document.createTextNode(c);
    choiceNode.appendChild(choiceText);
    choicesContainer.appendChild(choiceNode);
  });
}

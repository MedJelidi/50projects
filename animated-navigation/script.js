const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  const navContainer = document.querySelector(".nav-container");
  navContainer.classList.toggle("nav-close");
  navContainer.classList.toggle("nav-open");
  const lineA = document.querySelector(".line-a");
  const lineB = document.querySelector(".line-b");
  lineA.classList.toggle("close");
  lineA.classList.toggle("close-a");
  lineA.classList.toggle("open-a");
  lineB.classList.toggle("close");
  lineB.classList.toggle("close-b");
  lineB.classList.toggle("open-b");
  const linksContainer = document.querySelector(".links-container");
  linksContainer.classList.toggle("links-close");
  linksContainer.classList.toggle("links-open");
});

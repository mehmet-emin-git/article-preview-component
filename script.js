const share = document.querySelector(".share");
const social = document.querySelector(".social");

share.addEventListener("click", () => {
  social.classList.toggle("show");
});

const closeBtn = document.getElementById("close");
const navBar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});

ham.addEventListener("click", () => navBar.classList.add("active"));

let menu = document.querySelector(".menu-btn");
let nav_list = document.querySelector(".nav-list");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav_list.classList.toggle("active")
  
});
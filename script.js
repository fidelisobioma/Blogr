const dropDown = document.querySelectorAll(".drop-down");
const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const content3 = document.querySelector("#content3");
const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

dropDown.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const target = event.target.parentElement.id;
    switch (target) {
      case "product":
        content1.classList.toggle("showcontent");
        product.classList.toggle("rotate");
        break;
      case "company":
        content2.classList.toggle("showcontent");
        company.classList.toggle("rotate");
        break;
      case "connect":
        content3.classList.toggle("showcontent");
        connect.classList.toggle("rotate");
    }
  });
});

close.addEventListener("click", () => {
  nav.classList.remove("showmodal");
  close.style.display = "none";
  open.style.display = "block";
});
open.addEventListener("click", () => {
  nav.classList.add("showmodal");
  close.style.display = "block";
  open.style.display = "none";
});

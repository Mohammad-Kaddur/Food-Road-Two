let show = document.getElementById("show");
let ul = document.querySelector("#menuUl");
let menuUl = document.querySelectorAll("#menuUl li");

show.onclick = showMenu;

function showMenu() {
  for (let i = 0; i < menuUl.length; i++) {
    menuUl[i].style.display = "block";
  }
  ul.classList = "header-menu";
  let exit = document.createElement("i");
  exit.classList = "fa-regular fa-circle-xmark exit";
  exit.setAttribute("id", "hide");
  ul.prepend(exit);
  hide.onclick = function () {
    ul.classList.remove("header-menu");
    ul.removeAttribute("id");
    exit.remove("i");
    for (let i = 0; i < menuUl.length; i++) {
      menuUl[i].style.display = "";
    }
  };
}

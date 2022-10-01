let show = document.getElementById("show");
let ul = document.querySelector("#menuUl");
let menuUl = document.querySelectorAll("#menuUl li");
let body = document.querySelector("body");
show.onclick = showMenu;

function showMenu() {
  for (let i = 0; i < menuUl.length; i++) {
    menuUl[i].style.display = "block";
  }
  let coverDiv = document.createElement("div");
  coverDiv.classList = "cover-div";
  body.prepend(coverDiv);
  ul.classList = "header-menu";
  let mainli = document.createElement("li");
  let logIn = document.createElement("a");
  let text = document.createTextNode("LogIn");
  logIn.href = "https://mohammad-kaddur.github.io/Food_Road_Signin/";
  logIn.classList = "gradient-color";
  logIn.appendChild(text);
  mainli.appendChild(logIn);
  mainli.style.display = "block";
  logIn.style.color = "#fff";
  logIn.style.borderRadius = "25px";
  let exit = document.createElement("i");
  exit.classList = "fa-regular fa-circle-xmark exit";
  exit.setAttribute("id", "hide");
  ul.prepend(exit);
  ul.appendChild(mainli);
  hide.onclick = function () {
    coverDiv.remove("div");
    ul.classList.remove("header-menu");
    ul.removeAttribute("id");
    exit.remove("i");
    logIn.remove("a");
    for (let i = 0; i < menuUl.length; i++) {
      menuUl[i].style.display = "none";
    }
  };
  coverDiv.onclick = function () {
    coverDiv.remove("div");
    ul.classList.remove("header-menu");
    ul.removeAttribute("id");
    exit.remove("i");
    logIn.remove("a");
    for (let i = 0; i < menuUl.length; i++) {
      menuUl[i].style.display = "none";
    }
  };
}

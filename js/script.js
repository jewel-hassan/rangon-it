var btn = document.getElementById("text-one");
var btnInfo = document.getElementById("text-two");
var btnText = document.getElementById("text-three");

function setActiveButton(btnId) {
  var buttons = ["btn-one", "btn-two", "btn-three"];
  buttons.forEach(function (id) {
    var button = document.getElementById(id);
    if (id === btnId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function btnOne() {
  btn.style.display = "grid";
  btnInfo.style.display = "none";
  btnText.style.display = "none";
  setActiveButton("btn-one");
}

function btnTwo() {
  btnInfo.style.display = "grid";
  btn.style.display = "none";
  btnText.style.display = "none";
  setActiveButton("btn-two");
}

function btnThree() {
  btnText.style.display = "grid";
  btn.style.display = "none";
  btnInfo.style.display = "none";
  setActiveButton("btn-three");
}

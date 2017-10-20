function showHome() {
  document.getElementById("new").style.display = "none";
  document.getElementById("my").style.display = "none";
  document.getElementById("status").style.display = "none";
  document.getElementById("home").style.display = "inline";
}
var btnHome = document.getElementById("btnHome");
btnHome.addEventListener("click", showHome);

function showNew() {
  document.getElementById("home").style.display = "none";
  document.getElementById("my").style.display = "none";
  document.getElementById("status").style.display = "none";
  document.getElementById("new").style.display = "inline";
}
var btnNew = document.getElementById("btnNew");
btnHome.addEventListener("click", showNew);

function showMy() {
  document.getElementById("home").style.display = "none";
  document.getElementById("new").style.display = "none";
  document.getElementById("status").style.display = "none";
  document.getElementById("my").style.display = "inline";
}
var btnMy = document.getElementById("btnMy");
btnMy.addEventListener("click", showMy);

function showStatus() {
  document.getElementById("home").style.display = "none";
  document.getElementById("new").style.display = "none";
  document.getElementById("my").style.display = "none";
  document.getElementById("status").style.display = "inline";
}
var btnStatus = document.getElementById("btnStatus");
btnStatus.addEventListener("click", showStatus);


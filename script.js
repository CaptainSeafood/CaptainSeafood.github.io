// Tabs
function home() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
function issues() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
function suggestions() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
function features() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
function licence() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
function settings() {
  document.getElementById("Btn").style.color = "orange";
  document.getElementById("Btn2").style.color = "green";
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}
// setInterval(function() {
var params = new URLSearchParams(window.location.search);
// alert(params)}z
if (params == "tab=notes") {
  home();
}
if (params == "tab=issues") {
  issues();
}
if (params == "tab=forum") {
  suggestions();
}
if (params == "tab=features") {
  features();
}
if (params == "tab=licences") {
  licence();
}
if (params == "tab=settings") {
  settings();
}
// Custom Alerts and Prompts
function alert(alertName) {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("background").style.display = "block";
  document.getElementById("alertTitle").innerHTML = alertName;
  document.getElementById("alertOK").onclick = function() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("background").style.display = "none";
  };
}
function none() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("background").style.display = "none";
}
setInterval(function() {
  var customAlert = document.getElementById("alertTitle").innerHTML;
  if (customAlert == "") {
    document.getElementById("customAlert").style.display = "none";
  }
}, 1);
function cprompt(promptValue) {
  document.getElementById("background").style.display = "block";
  setTimeout(function() {
    prompt(promptValue);
    document.getElementById("background").style.display = "none";
  }, 5);
}

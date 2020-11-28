// Tabs
function about() {
  document.getElementById("aboutBtn").classList.add("current-tab");
  document.getElementById("projectsBtn").classList.remove("current-tab");
  document.getElementById("organizationsBtn").classList.remove("current-tab");
  document.getElementById("blogBtn").classList.remove("current-tab");
  document.getElementById("contactBtn").classList.remove("current-tab");
  document.getElementById("settingsBtn").classList.remove("current-tab");
  document.getElementById("default").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("organizations").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("settings").style.display = "none";
}
function projects() {
  document.getElementById("aboutBtn").classList.remove("current-tab");
  document.getElementById("projectsBtn").classList.add("current-tab");
  document.getElementById("organizationsBtn").classList.remove("current-tab");
  document.getElementById("blogBtn").classList.remove("current-tab");
  document.getElementById("contactBtn").classList.remove("current-tab");
  document.getElementById("settingsBtn").classList.remove("current-tab");
  document.getElementById("default").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("organizations").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("settings").style.display = "none";
}
function organizations() {
  document.getElementById("aboutBtn").classList.remove("current-tab");
  document.getElementById("projectsBtn").classList.remove("current-tab");
  document.getElementById("organizationsBtn").classList.add("current-tab");
  document.getElementById("blogBtn").classList.remove("current-tab");
  document.getElementById("contactBtn").classList.remove("current-tab");
  document.getElementById("settingsBtn").classList.remove("current-tab");
  document.getElementById("default").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("organizations").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("settings").style.display = "none";
}
function blog() {
  document.getElementById("aboutBtn").classList.remove("current-tab");
  document.getElementById("projectsBtn").classList.remove("current-tab");
  document.getElementById("organizationsBtn").classList.remove("current-tab");
  document.getElementById("blogBtn").classList.add("current-tab");
  document.getElementById("contactBtn").classList.remove("current-tab");
  document.getElementById("settingsBtn").classList.remove("current-tab");
  document.getElementById("default").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("organizations").style.display = "none";
  document.getElementById("blog").style.display = "block";
  document.getElementById("contact").style.display = "none";
  document.getElementById("settings").style.display = "none";
}
function contact() {
  document.getElementById("aboutBtn").classList.remove("current-tab");
  document.getElementById("projectsBtn").classList.remove("current-tab");
  document.getElementById("organizationsBtn").classList.remove("current-tab");
  document.getElementById("blogBtn").classList.remove("current-tab");
  document.getElementById("contactBtn").classList.add("current-tab");
  document.getElementById("settingsBtn").classList.remove("current-tab");
  document.getElementById("default").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("organizations").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("settings").style.display = "none";
}
function settings() {
  document.getElementById("aboutBtn").classList.remove("current-tab");
  document.getElementById("projectsBtn").classList.remove("current-tab");
  document.getElementById("organizationsBtn").classList.remove("current-tab");
  document.getElementById("blogBtn").classList.remove("current-tab");
  document.getElementById("contactBtn").classList.remove("current-tab");
  document.getElementById("settingsBtn").classList.add("current-tab");
  document.getElementById("settings").style.display = "block";
  document.getElementById("background").style.display = "block";
  document.getElementById("closeBackground").style.display = "block";
}
var params = new URLSearchParams(window.location.search);
if (params == "tab=about") {
  about();
}
if (params == "tab=projects") {
  projects();
}
if (params == "tab=organizations") {
  organizations();
}
if (params == "tab=blog") {
  blog();
}
if (params == "tab=contact") {
  contact();
}
if (params == "tab=settings") {
  settings();
}

// Custom Alerts and Prompts
function alert(alertName) {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("background").style.display = "block";
  document.getElementById("closeBackground").style.display = "block";
  document.getElementById("alertTitle").innerHTML = alertName;
  document.getElementById("alertOK").onclick = function() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("background").style.display = "none";
  };
}
function none() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("background").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("closeBackground").style.display = "none";
  document.getElementById("settingsBtn").classList.remove("current-tab");
}
setInterval(function() {
  var customAlert = document.getElementById("alertTitle").innerHTML;
  if (customAlert == "") {
    document.getElementById("customAlert").style.display = "none";
  }
}, 1);
function cprompt(promptValue) {
  document.getElementById("background").style.display = "block";
  document.getElementById("closeBackground").style.display = "block";
  setTimeout(function() {
    prompt(promptValue);
    document.getElementById("background").style.display = "none";
  }, 5);
}
// Notification Close
function closeN() {
  document.getElementById("one").style.display = "none";
  localStorage.setItem("n1", "1");
}
function closeN2() {
  document.getElementById("two").style.display = "none";
  localStorage.setItem("n2", "2");
}
function closeN3() {
  document.getElementById("three").style.display = "none";
  localStorage.setItem("n3", "3");
}
var one = localStorage.getItem("n1");
var two = localStorage.getItem("n2");
var three = localStorage.getItem("n3");
if (one === "1") {
  document.getElementById("one").style.display = "none";
}
if (two === "2") {
  document.getElementById("two").style.display = "none";
}
if (three === "3") {
  document.getElementById("three").style.display = "none";
}
function showNot() {
  localStorage.setItem("n1", "0");
  localStorage.setItem("n2", "0");
  localStorage.setItem("n3", "0");
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "block";
  document.getElementById("three").style.display = "block";
}
function clearNot() {
  localStorage.setItem("n1", "1");
  localStorage.setItem("n2", "2");
  localStorage.setItem("n3", "3");
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
}
function closeSettings() {
  document.getElementById("settings").style.display = "none";
  document.getElementById("background").style.display = "none";
  document.getElementById("settingsBtn").classList.remove("current-tab");
}
setInterval(function() {
  document.getElementById("selfPic").onclick = function() {
    var token = prompt("Please enter the token you were given.");
    if (token == "TKmbJKV4ah"){
      location.href = "/realPic";
    }
    else{
      alert("Incorrect!")
    }
  };
}, 5);

localStorage.setItem("visited", "true");
let root = document.documentElement;
document.getElementById("darkmodeToggle").addEventListener("click", function() {
  darkmodeToggle();
});

function darkmodeToggle() {
  if (localStorage.getItem("mode") == "dark") {
    root.style.setProperty('--background-secondary', '#4d97ff');
    root.style.setProperty('--background-primary', '#ffffff');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#292929');
    localStorage.setItem("mode", "light");
  } else {
    root.style.setProperty('--background-secondary', '#292929');
    root.style.setProperty('--background-primary', '#1A1A1A');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#d1d1d1');
    localStorage.setItem("mode", "dark");
  }
}

if (localStorage.getItem("visited") == "true") {
  if (localStorage.getItem("mode") == "dark") {
    root.style.setProperty('--background-secondary', '#4d97ff');
    root.style.setProperty('--background-primary', '#ffffff');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#292929');
  } else {
    root.style.setProperty('--background-secondary', '#292929');
    root.style.setProperty('--background-primary', '#1A1A1A');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#d1d1d1');
  }
} else {
  localStorage.setItem("mode", "dark");
}
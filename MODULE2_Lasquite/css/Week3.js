let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    
    var x = document.getElementById("togglemode");
    if (x.innerHTML === "light mode!") {
    x.innerHTML = "dark mode!";
    } else {
    x.innerHTML = "light mode!";
    }
}
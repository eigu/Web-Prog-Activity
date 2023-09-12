function changeContent() {
    var x = document.getElementById("sample-text");
    if (x.innerHTML === "Ping.") {
        x.innerHTML = "Pong!";
    } else {
        x.innerHTML = "Ping."
    }
}

function changeSize() {
    var x = document.getElementById("change-size");
    var y = document.getElementById("sample-text");
    if (x.innerHTML === "Bigger!") {
        x.innerHTML = "Back to normal.";
        y.style.fontSize = "32px";
    } else {
        x.innerHTML = "Bigger!"
        y.style.fontSize = "16px";
    }
}

function hideElement() {
    var x = document.getElementById("hide-element");
    var y = document.getElementById("sample-text");
    if (x.innerHTML === "Hide me!") {
        x.innerHTML = "Reveal me!";
        y.style.display = "none";
    } else {
        x.innerHTML = "Hide me!"
        y.style.display = "block";
    }
}

function consoleLog() {
    console.log("Pong!") ;
}

function alertBox() {
    window.alert("Welcome to CIIT");
}

function compute() {
    var x = 5;
    var y = 3;

    x **= y;
    
    document.getElementById("answer").innerHTML = x;
}
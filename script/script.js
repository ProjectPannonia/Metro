function switchdiv(id) {
    console.log("id: " + id);
    
}

function flip(id) {
    let box = document.getElementById(id);
    
    box.classList.add("flip-vertical-left");
    box.style.backgroundImage = "none";
    box.style.background = "white";
    //box.style.backgroundImage = "url('pic/first.png')";
    
    //document.getElementById(id).classList.add("flip-vertical-left");
}
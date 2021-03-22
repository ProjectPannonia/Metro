function switchdiv(id) {
    
    if(id === "homeBtn") {
        $("#bookCont").hide(1000);
        $("#gamesCont").hide(1000);
    } else if(id === "bookBtn") {
        $("#gamesCont").hide(1000);
        $("#bookCont").toggle(1000);
    } else {
       $("#bookCont").hide(1000);
        $("#gamesCont").toggle(1000); 
    }   
}


function flip(id) {
    var box = document.getElementById(id);
    
    if(box.classList.contains("flip-vertical-left")) {
        box.classList.remove("flip-vertical-left");
        box.style.backgroundImage = "url('pic/first.png')";
        box.style.backgroundSize = "cover";
    } else {
        box.classList.add("flip-vertical-left");
        box.style.backgroundImage = "none";
        box.style.background = "white";
    }
    
//    box.classList.add("flip-vertical-left");
//    box.style.backgroundImage = "none";
//    box.style.background = "white";
    //box.style.backgroundImage = "url('pic/first.png')";
    
    //document.getElementById(id).classList.add("flip-vertical-left");
}
function switchdiv(id) {
    
    if(id === "homeBtn") {
        $("#bookCont").hide();
        $("#gamesCont").hide();
    } else if(id === "bookBtn") {
        $("#gamesCont").hide();
        $("#bookCont").toggle();
    } else {
       $("#bookCont").hide();
        $("#gamesCont").toggle(); 
    }
    
   //$("#"+id).toggle();
    
}

function getDispProperty(id) {
    return document.getElementById(id).style.display.val;
}

function flip(id) {
    let box = document.getElementById(id);
    
    box.classList.add("flip-vertical-left");
    box.style.backgroundImage = "none";
    box.style.background = "white";
    //box.style.backgroundImage = "url('pic/first.png')";
    
    //document.getElementById(id).classList.add("flip-vertical-left");
}
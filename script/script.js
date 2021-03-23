
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
        
        if(id === "first"){
            box.style.backgroundImage = "url('pic/first.png')";
        } else if(id === "second") {
            box.style.backgroundImage = "url('pic/second.png')";
        } else {
            box.style.backgroundImage = "url('pic/third.png')";
        }
        
        box.style.backgroundSize = "cover";
    } else {
        box.classList.add("flip-vertical-left");
        box.style.backgroundImage = "none";
        box.style.background = "white";
    }
}

let flipFirst = function(id) {
    let firstBox = document.getElementById(id);
    
    if(firstBox.classList.contains("flip-vertical-left")) {
        firstBox.classList.remove("flip-vertical-left");
        firstBox.style.backgroundImage = "url('pic/first.png')";
        firstBox.style.backgroundSize = "cover";
    } else {
        firstBox.classList.add("flip-vertical-left");
        firstBox.style.backgroundImage = "url('pic/first-bg.png')";
        
    }
    
}


$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
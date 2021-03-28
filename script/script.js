
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

$("#first").click(function(){
    let selected = $("#first");
    let flipped = selected.hasClass("flip-vertical-left");
    
    if(flipped) {

        showAuthorInfo();
        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/first.png')");
        selected.css("backgroundSize","cover");
    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/first-bg.png')");
        selected.css("backgroundSize","cover");
    }
});

$("#second").click(function() {
    let selected = $("#second");
    let flipped = selected.hasClass("flip-vertical-left");
    
    
    if(flipped) {

        showAuthorInfo();
        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/second.png')");
        selected.css("backgroundSize","cover");
        
    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/second-bg.png')");
        selected.css("backgroundSize","cover");
    }
});

$("#third").click(function() {
    let selected = $("#third");
    let flipped = selected.hasClass("flip-vertical-left");

    if(flipped) {

        showAuthorInfo();
        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/third.png')");
        selected.css("backgroundSize","cover");
    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/third-bg.png')");
        selected.css("backgroundSize","cover");
    }
});

let hideAuthorInfo = function() {
    $(".authorInfo").hide();
}
let showAuthorInfo = function() {
    $(".authorInfo").show();
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
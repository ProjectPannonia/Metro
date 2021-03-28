
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
        $("#first_book_description").hide();

    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/first-bg.png')");
        selected.css("backgroundSize","cover");
        $("#first_book_description").show();

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
        $("#second_book_description").hide();
        
    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/second-bg.png')");
        selected.css("backgroundSize","cover");
        $("#second_book_description").show();

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
        $("#third_book_description").hide();

    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/third-bg.png')");
        selected.css("backgroundSize","cover");
        $("#third_book_description").show();

    }
});

let hideAuthorInfo = function() {
    $(".authorInfo").hide();
}
let showAuthorInfo = function() {
    $(".authorInfo").show();
}

function switchdiv(id) {
    
    if(id === "homeBtn") {
        
        $("main").css("background","rgba(0,0,0, 0");
        $("#bookCont").hide(1000);
        $("#gamesCont").hide(1000);

    } else if(id === "bookBtn") {

        $("#gamesCont").hide(1000);

        if($("#bookCont").css("display") == "none") {
           menuShowHelper("#bookCont");
        } else {
            menuHideHelper("#bookCont");
        }

    } else {

        $("#bookCont").hide(1000);
        
        if($("#gamesCont").css("display") == "none") {  
           menuShowHelper("#gamesCont");
        } else {
           menuHideHelper("#gamesCont");
        }

    }   
}

let menuShowHelper = function(id) {
    
    $("main").css("background","rgba(0, 0, 0, .5)");
    $(id).show(1000);
    $(id).css("display","flex");
    $(id).css("flex-direction","row");
    $(id).css("flex-wrap","no-wrap");

}

let menuHideHelper = function(id) {
    
    $("main").css("background","rgba(0, 0, 0, 0)");
    $(id).hide(1000);
    $(id).css("display","none");

}

$("#first").click(function(){
    let selected = $("#first");
    let flipped = selected.hasClass("flip-vertical-left");
    
    if(flipped) {

        showAuthorInfo();
        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/books/first.png')");
        selected.css("backgroundSize","cover");
        $("#first_book_description").hide();

    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/books/first-bg.png')");
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
        selected.css("background","url('pic/books/second.png')");
        selected.css("backgroundSize","cover");
        $("#second_book_description").hide();
        
    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/books/second-bg.png')");
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
        selected.css("background","url('pic/books/third.png')");
        selected.css("backgroundSize","cover");
        $("#third_book_description").hide();

    } else {

        hideAuthorInfo();
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/books/third-bg.png')");
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

$("#firstGame").click(function(){
    let selected = $("#firstGame");
    let flipped = selected.hasClass("flip-vertical-left");

    if(flipped) {

        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/games/first.png')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","1");
        $("#first_game_description").hide();

    } else {

        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/games/first.png')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","0.5");
        $("#first_game_description").show();

    }
});
$("#secondGame").click(function(){
    let selected = $("#secondGame");
    let flipped = selected.hasClass("flip-vertical-left");

    if(flipped) {

        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/games/second.jpg')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","1");
        $("#second_game_description").hide();

    } else {

        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/games/second.jpg')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","0.5");
        $("#second_game_description").show();

    }
});
$("#thirdGame").click(function(){
    let selected = $("#thirdGame");
    let flipped = selected.hasClass("flip-vertical-left");

    if(flipped) {
        selected.removeClass("flip-vertical-left");
        selected.css("background","url('pic/games/third.jpg')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","1");
        $("#third_game_description").hide();
    } else {
        selected.addClass("flip-vertical-left");
        selected.css("background","url('pic/games/third.jpg')");
        selected.css("backgroundSize","cover");
        selected.css("opacity","0.5");
        $("#third_game_description").show();
    }
});
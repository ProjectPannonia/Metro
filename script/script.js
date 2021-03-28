
function switchdiv(id) {
    
    if(id === "homeBtn") {
        
        $("#bookCont").hide(1000);
        $("#gamesCont").hide(1000);

    } else if(id === "bookBtn") {

        $("#gamesCont").hide(1000);
        
        if($("#bookCont").css("display") == "none") {
        
            $("#bookCont").show(1000);
            $("#bookCont").css("display","flex");
            $("#bookCont").css("flex-direction","row");
            $("#bookCont").css("flex-wrap","no-wrap");
        
        } else {
        
            $("#bookCont").hide(1000);
            $("#bookCont").css("display","none");
        
        }

    } else {

        $("#bookCont").hide(1000);
        
        if($("#gamesCont").css("display") == "none") {

            $("#gamesCont").show(1000);
            $("#gamesCont").css("display","flex");
            $("#gamesCont").css("flex-direction","row");
            $("#gamesCont").css("flex-wrap","no-wrap");

        } else {

            $("#gamesCont").hide(1000);
            $("#gamesCont").css("display","none");

        }

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
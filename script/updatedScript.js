/*
    Main-menu functions 
*/
function switchContent(id) {
    
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

/*
    Book functions
*/

function bookSwitcher(id) {

    let hashId = "#" + id;
    let selectedBook = $(hashId);
    let isFlipped = selectedBook.hasClass("flip-vertical-left");

    if(isFlipped) {
        
        $(".authorInfo").show();

        selectedBook.removeClass("flip-vertical-left");
        selectedBook.css("background", "url('pic/books/" + id + ".jpg'");
        selectedBook.css("backgroundSize", "cover");
        $(hashId + "_book_description").hide();

    } else {

        selectedBook.addClass("flip-vertical-left");
        selectedBook.css("background", "url('pic/books/" + id + "-bg.jpg'");
        selectedBook.css("backgroundSize", "cover");
        $(hashId + "_book_description").show();
        hideOtherBooks(id);

    }
}

let hideOtherBooks = function(activeId) {
    
    let ids = getOtherElementsId(activeId);
    let selectedBook = $("#" + activeId);
    let otherElementOne = ids[0];
    let otherElementTwo = ids[1];

    $(".authorInfo").hide();
    selectedBook.addClass("flip-vertical-left");
    selectedBook.css("background", "url('pic/books/" + activeId + "-bg.jpg'");
    selectedBook.css("backgroundSize", "cover");
    $(activeId + "_book_description").show();

    hideElementById(otherElementOne);
    hideElementById(otherElementTwo);
}

let hideElementById = function(idToHide) {
    let hashId = "#" + idToHide;
    let elementToHide = $(hashId);
    let isFlipped = elementToHide.hasClass("flip-vertical-left");

    if(isFlipped) {
        elementToHide.removeClass("flip-vertical-left");
        elementToHide.css("background", "url(\'pic/books/" + idToHide + ".jpg\')");
        elementToHide.css("backgroundSize", "cover");
        $(hashId + "_book_description").hide();
    }
}

let getOtherElementsId = function(activeId) {
    let arrayOfIds = [];

    if(activeId === "first") {
        arrayOfIds.push("second");
        arrayOfIds.push("third");
    } else if (activeId === "second") {
        arrayOfIds.push("first");
        arrayOfIds.push("third");
    } else {
        arrayOfIds.push("first");
        arrayOfIds.push("second");
    }

    return arrayOfIds;
}

/*
    Game functions
*/
let gameSwitcher = function(id) {

    let hashId = "#" + id;
    let selectedGame = $(hashId);
    let isFlipped = selectedGame.hasClass("flip-vertical-left");

    if(isFlipped) {
        
    }
}
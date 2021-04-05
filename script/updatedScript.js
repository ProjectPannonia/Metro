/*
    Main-menu functions 
*/
function switchContent(id) {

    switch(id) {
        case "homeBtn":

            $("main").css("background","rgba(0,0,0, 0");
            $("#bookCont").hide(1000);
            $("#gamesCont").hide(1000);
            $("#contactCont").hide(1000);
            break;

        case "bookBtn":

            $("#gamesCont").hide(1000);
            $("#contactCont").hide(1000);

            $("#bookCont").css("display") == "none" ? menuShowHelper("#bookCont") : menuHideHelper("#bookCont");
            //contentDivShow ? menuShowHelper(getContent(idWithHash)) : menuHideHelper(getContent(idWithHash));
            break;

        case "gamesBtn":

            $("#bookCont").hide(1000);
            $("#contactCont").hide(1000);

            $("#gamesCont").css("display") == "none" ? menuShowHelper("#gamesCont") : menuHideHelper("#gamesCont");
            //contentDivShow ? menuShowHelper(getContent(idWithHash)) : menuHideHelper(getContent(idWithHash));
            break;

        case "contactBtn":

            $("#bookCont").hide(1000);
            $("#gamesCont").hide(1000);

            $("#contactCont").css("display") == "none" ? menuShowHelper("#contactCont") : menuHideHelper("#contactCont");
            //contentDivShow ? menuShowHelper(getContent(idWithHash)) : menuHideHelper(getContent(idWithHash));
            break;
    }
    
}

let getContent = function(btnId) {
    switch(btnId) {
        case "bookBtn":
            return "#bookCont";
            break;
        case "gamesBtn":
            return "#gamesCont";
            break;
        case "contactBtn":
            return "#contactCont";
            break;
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
    selectedBook.css("background", "url('pic/books/" + activeId + "-bg.jpg')");
    selectedBook.css("backgroundSize", "cover");
    $(activeId + "_book_description").show();

    hideBookElementById(otherElementOne);
    hideBookElementById(otherElementTwo);
}

let hideBookElementById = function(idToHide) {
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



/*
    Game functions
*/
let gameSwitcher = function(id) {

    let hashId = "#" + id; //#firstGame
    let selectedGame = $(hashId);
    let isFlipped = selectedGame.hasClass("flip-vertical-left");
    
    if(isFlipped) {

        $(".developerInfo").show();
        
       selectedGame.removeClass("flip-vertical-left");
       selectedGame.css("background","url('pic/games/" + id.substring(0,id.length-4) + ".jpg')");
       selectedGame.css("opacity", "1");
       selectedGame.css("backgroundSize", "cover");
       $(hashId.substring(0,hashId.length-4) + "_game_description").hide();
    
    } else {
    
       selectedGame.addClass("flip-vertical-left");
       selectedGame.css("background","url('pic/games/" + id.substring(0,id.length-4) + ".jpg')");
       selectedGame.css("opacity", ".5");
        let descId = hashId.substring(0,hashId.length-4) + "_game_description";
        $(descId).show();
        hideOtherGames(id);
    }

    
}

let hideOtherGames = function(activeId) {

    let ids = getOtherElementsId(activeId);
    let selectedGame = $("#" + activeId);
    let otherElementOne = ids[0];
    let otherElementTwo = ids[1];

    $(".developerInfo").hide();
    selectedGame.addClass("flip-vertical-left");
    selectedGame.css("background", "url('pic/games/" + activeId.substring(0,activeId.length-4) + ".jpg')");
    selectedGame.css("backgroundSize", "cover");
    $(activeId + "_game_description").hide();

    hideGameElementById(otherElementOne);
    hideGameElementById(otherElementTwo);
}

let hideGameElementById = function(idToHide) {
    let hashId = "#" + idToHide;
    let elementToHide = $(hashId);
    let isFlipped = elementToHide.hasClass("flip-vertical-left");

    if(isFlipped) {
        elementToHide.removeClass("flip-vertical-left");
        elementToHide.css("background", "url('pic/games/" + idToHide.substring(0, idToHide.length-4) + ".jpg')");
        elementToHide.css("backgroundSize", "cover");
        elementToHide.css("opacity", "1");
        $(hashId.substring(0,hashId.length-4) + "_game_description").hide();
    }
}

let getOtherElementsId = function(activeId) {
    let arrayOfIds = [];
    
    switch(activeId) {
        case "first":
            arrayOfIds.push("second", "third");
            break;
        case "second":
            arrayOfIds.push("first", "third");
            break;
        case "third":
            arrayOfIds.push("first", "second");
            break;
        case "firstGame":
            arrayOfIds.push("secondGame", "thirdGame");
            break;
        case "secondGame":
            arrayOfIds.push("firstGame", "thirdGame");
            break;
        default:
            arrayOfIds.push("firstGame", "secondGame");
    }
    
    return arrayOfIds;
}

/*
    Sub game content functions
*/


let switchSubGame = function(id) {
    
    let containerName = id.substring(0,id.length-3);
    $("#" + containerName).show(1000);
    hideAllOtherGameContents(containerName);
}
let hideAllOtherGameContents = function(activaContainerName) {

    let gameContainers = [
                            "firstGameStory", "firstGameInfo", "firstGameRequirements", "firstGameGallery",
                            "secondGameStory", "secondGameInfo", "secondGameRequirements", "secondGameGallery",
                            "thirdGameStory", "thirdGameInfo", "thirdGameRequirements", "thirdGameGallery"
    ];

    for(let i = 0; i < gameContainers.length; i++) {
        if(gameContainers[i] !== activaContainerName) {
            $("#" + gameContainers[i]).hide();
        }
    }

}

let pictureSwitcher = function(id) {
    console.log("pushed: " + id)
    $("#activePicture").css("src","url('../pic/games/gallery/2033/2.jpg')");
    console.log( "src: " + $("#activePicture").css("src"));
}

let scaleDown = function(id) {
    $("#" + id).addClass("scale-down-center");
    setTimeout(function() {
        $("#" + id).addClass("scale-up-center");
    },500);
    
    setTimeout(function() {
        window.open("http://www.4a-games.com/");
        $("#" + id).removeClass("scale-down-center");
        $("#" + id).removeClass("scale-up-center");
    },700);
}

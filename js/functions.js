function startGame() {
    moveEgg(allEggs[0], Math.random() * .5 + 1)
    moveEgg(allEggs[1], Math.random() * 2.55 + 1)
    moveEgg(allEggs[2], Math.random() + 1)

    let theGame = requestAnimationFrame(startGame);

    checkEggHunted(allEggs[0]);
    checkEggHunted(allEggs[1]);
    checkEggHunted(allEggs[2]);

    if (LiveScore <= 0) {
        cancelAnimationFrame(theGame);
        $("#startGame").text("Game Over Try Again! ^-^").slideDown(1000);
        if (highestScore > localStorage.getItem("highestScore")) {
            updateLocalStorage();
        }
    }

}

function moveEgg(egg, speed) {
    let topOfEgg = $(egg).offset().top,
        distanceMove = Math.random() * speed + 1,
        bottomOfBAsket = Basket.offset().top + heightBasket,
        indexOfEgg = allEggs.index(egg);

    if (topOfEgg <= bottomOfBAsket) {
        $(egg).offset({
            top: topOfEgg + distanceMove
        });
    } else {
        if (LiveScore > 0) {
            resetPositionEgg(egg)
            brokenEggs.eq(indexOfEgg).fadeIn(10).delay(500).fadeOut(500);
            $("#LiveScore").text(--LiveScore);
        }
    }
}

function resetPositionEgg(egg) {
    $(egg).offset({
        top: 126.2
    });
}

function resetGame() {
    allEggs.each((index, element) => {
        resetPositionEgg(element);
    })
    LiveScore = 5;
    score = 0;
    $("#LiveScore").text(LiveScore);
    $(".score").text(score);
}

function checkEggHunted(egg) {
    if (collision(egg, Basket)) {
        $(".score").text(++score);
        resetPositionEgg(egg);
        if (score > highestScore) {
            $("#HighestScore").text(++highestScore);
        }
    }
}

function collision(item1, item2) {
    let t1 = $(item1).offset().top,
        l1 = $(item1).offset().left,
        b1 = t1 + $(item1).outerHeight(true),
        r1 = l1 + $(item1).outerWidth(true);

    let t2 = $(item2).offset().top,
        l2 = $(item2).offset().left,
        b2 = t2 + $(item2).outerHeight(true),
        r2 = l2 + $(item2).outerWidth(true);

    if (b2 < t1 || l2 > r1 || t2 > b1 || r2 < l1) {
        return false;
    } else {
        return true;
    }

}

function updateLocalStorage() {
    localStorage.setItem("highestScore", highestScore);
}

function moveBasket(distanceX) {
    let mouseMoveX = distanceX;
    if (mouseMoveX >= halfWidthBAsket && mouseMoveX <= gameWidth - halfWidthBAsket) {
        Basket.css({
            left: mouseMoveX - halfWidthBAsket,
        })
    }
}

// chatGPT Tell Me that
function setGameHeight() {
    // $("#Game").css({
    //     height:,
    // })

    document.querySelector("#Game").style.height =  window.innerHeight + "px";
}
let Basket = $("#Game #Basket"),
    heightBasket = Basket.outerHeight(true),
    halfWidthBAsket = Basket.outerWidth(true) / 2,
    gameWidth = $("#Game").outerWidth(true),
    allEggs = $(".egg"),
    brokenEggs = $(".brokenEggs .brokenEgg"),
    LiveScore = 5,
    score = 0,
    highestScore = 0;


if (localStorage.getItem("highestScore") == null) {
    updateLocalStorage()
} else {
    highestScore = localStorage.getItem("highestScore");
    $("#HighestScore").text(highestScore);
}

$(window).mousemove(function (e) {
    let mouseMoveX = e.pageX

    if (mouseMoveX >= halfWidthBAsket && mouseMoveX <= gameWidth - halfWidthBAsket) {
        Basket.css({
            left: mouseMoveX - halfWidthBAsket,
        })
    }
})

$("#startGame").click(function () {
    $(this).slideUp(1000, function () {
        resetGame()
        startGame()
    })
})

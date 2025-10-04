let Basket = $("#Game #Basket"),
    heightBasket = Basket.outerHeight(true),
    halfWidthBAsket = Basket.outerWidth(true) / 2,
    gameWidth = $("#Game").outerWidth(true),
    allEggs = $(".egg"),
    brokenEggs = $(".brokenEggs .brokenEgg"),
    LiveScore = 5,
    score = 0,
    highestScore = 0,
    touchStart;

if (localStorage.getItem("highestScore") == null) {
    updateLocalStorage()
} else {
    highestScore = localStorage.getItem("highestScore");
    $("#HighestScore").text(highestScore);
}
window.addEventListener("resize", setGameHeight);

$("#startGame").click(function () {
    $(this).slideUp(1000, function () {
        resetGame()
        startGame()
    })
})

window.addEventListener("touchmove", (e) => {
    e.preventDefault();
    moveBasket(e.touches[0].pageX);
    console.log(e);
})

$(window).mousemove(function (e) {
    moveBasket(e.pageX)
})


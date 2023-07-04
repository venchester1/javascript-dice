var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource)


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll('img')[1].setAttribute("src", randomImageSource1)


if(randomNumber > randomNumber1) {
    document.querySelector("h1").textContent = "WINNER PLAYER 1"
} else if (randomNumber < randomNumber1) {
    document.querySelector("h1").textContent = "WINNER PLAYER 2"
} else {
    document.querySelector("h1").textContent = "DRAW"
}







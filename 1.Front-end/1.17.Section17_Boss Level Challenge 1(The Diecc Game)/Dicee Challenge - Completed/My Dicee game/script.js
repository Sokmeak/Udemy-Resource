var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// check if whoever win
console.log("Number 1: "+randomNumber1);
console.log("Number 2: "+randomNumber2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
} else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTMLL = "Draw!";
}

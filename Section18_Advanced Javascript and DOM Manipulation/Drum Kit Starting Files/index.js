// We can use simple loop!

var numberOfbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got click!");
    var letter = this.innerHTML;
    makeSound(letter);
    buttonAnimation(letter);
  });
}

document.addEventListener("keypress", function (event) {
  var letterFromKeyboard = event.key;

  makeSound(letterFromKeyboard);
  buttonAnimation(letterFromKeyboard);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;

    case "k":
      var clash = new Audio("./sounds/crash.mp3");
      clash.play();

      break;

    case "l":
      var kick_bass = new Audio("./sounds/kick-bass.mp3");
      kick_bass.play();

      break;

    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

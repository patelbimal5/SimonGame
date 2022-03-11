// alert("Working");

var buttonColors = {"red", "blue", "yellow"};

var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor( Math.random() * 4 ) + 1;

  var randomChooseColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColour);
}

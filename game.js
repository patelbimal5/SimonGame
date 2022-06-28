//alert("Working");

var buttonColors = ["red", "blue","green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress( function(){
  if (!started) {
    //h1 title
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function playGame(){
  if (!started) {
    //h1 title
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
}

//what to do when any of btn is clicked.
$(".btn").click( function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);  //playing sound when user clicks.
  animatePress(userChosenColor); //flashing button animation on calling function.
  checkAnswer(userClickedPattern.length-1);
});


//--------------------------------CHECK ANSWER FUNCTION-------------------------
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function () {
          nextSequence();
        }, 1000);
    }
  } else {
      playSound("wrong");

      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart"); //chaning h1 to press key to restart.

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200); // chaning display to game over page after 2 secc

      startOver();
    }
}

//--------------------- NEXT SEQUENCE FUNCTION--------------------
function nextSequence(){

  userClickedPattern = [];

  level++; //adding level everyting
  $("#level-title").text("Level " + level);  // chaning level to current level

  var randomNumber = Math.floor( Math.random() * 4 );
  var randomChosenColor = buttonColors[randomNumber];   //choosing random color using randomNumber

  gamePattern.push(randomChosenColor); //storing game patterns

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); //flasing the button which is pressed to clicked.

  playSound(randomChosenColor);
}

//----------------------------Restart game function START OVER FUNCTION---------------
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


//--------------------PLAY SOUND FUNCTION-------------------------------
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//-------------------------ANIMATION FUNCTION---------------------------
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

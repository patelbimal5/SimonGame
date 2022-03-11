// alert("Working");
var buttonColors = {"red", "blue", "yellow"};
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(fucntion() {
  if(!started){
    //h1 title
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//--------------------------------CHECK ANSWER FUNCTION-------------------------
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    if (userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function () {
          nextSequence();
        }, 1000);
    }
  } else {
      console.log("wrong");
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200); // chaning display to game over page after 2 secc

      $("#level-title").text("Game Over, Press Any Key to Restart"); //chaning h1 to press key to restart.
      startOver();
    }
}


//---------------------------BUTTON CLICK EVENT HANDER------------------------------------------------------
// for(var i=0; i<$(".btn").length; i++){
//   $(".btn")[i].addEventListner("click", function(){
//     alert("I got clicked");
//     var thisButton = this.innerHTML;
//     userClickedPattern = $("#" + thisButton );
//
//     //var thisButton = this.innerHTML;
//   });

//what to do when any of btn is clicked.
$(".btn").click(fucntion(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColour);  //playing sound when user clicks.
  animatePress(userChosenColor); //flashing button animation on calling function.
  checkAnswer(userClickedPattern.length-1);
});

//--------------------- NEXT SEQUENCE FUNCTION--------------------
function nextSequence(){

  userClickedPattern = [];

  level++; //adding level everyting
  $("#level-title").text("Level " + level);  // chaning level to current level

  var randomNumber = Math.floor( Math.random() * 4 ) + 1;
  var randomChosenColor = buttonColors[randomNumber];   //choosing random color using randomNumber

  gamePattern.push(randomChosenColour); //storing game patterns

  $("#" + randomChosenColor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //flasing the button which is pressed to clicked.

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

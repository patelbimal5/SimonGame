// alert("Working");
var buttonColors = {"red", "blue", "yellow"};
var gamePattern = [];
var userClickedPattern = [];

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
});

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence(){
  var randomNumber = Math.floor( Math.random() * 4 ) + 1;
  var randomChosenColor = buttonColors[randomNumber];   //choosing random color using randomNumber

  gamePattern.push(randomChosenColour); //storing game patterns

  $("#" + randomChosenColor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //flasing the button which is pressed to clicked.

  playSound(randomChosenColor);
}

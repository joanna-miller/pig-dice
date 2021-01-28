// Business Logic
function Player(playerNum, turnScore, totalScore, status) {
this.playerNum = playerNum;
this.turnScore = turnScore;
this.totalScore = totalScore;
this.status = status;
}
let player1 = new Player(1, [], 0, false);
let player2 = new Player(2, [], 0, false);
// generate random "dice roll" number from 1-6

let rollsArray = [];
Player.prototype.rollDice = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1
  console.log(rollValue);
  rollsArray.push(rollValue);
};
Player.prototype.endTurn = function() {
  let sum = 0;
  if (rollsArray.includes(1)) {
      this.turnScore.push(0);
    } else rollsArray.forEach(function(element) {
      sum += element;
    });  
  this.turnScore.push(sum);
  rollsArray = [];
};
// user logic//
$(document).ready(function(){
  $("#play").click(function(){
    $(".player1").show();
    $("#play").hide();
  });
  $("#pass-player1").click(function(){
    player1.endTurn();
    $(".player2").show();
    $(".player1").slideUp();
    });
  $("#pass-player2").click(function(){
    player2.endTurn();
    $(".player1").show();
    $(".player2").slideUp();  
  });
  $("#roll-player1").click(function(){
    player1.rollDice();
  });
  $("#roll-player2").click(function(){
    player2.rollDice();
  });
});
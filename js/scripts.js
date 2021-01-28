// Business Logic
function Player(playerNum, currentRoll, currentTurnScore, turnScore, totalScore, status) {
this.playerNum = playerNum;
this.currentRoll = currentRoll;
this.currentTurnScore = currentTurnScore;
this.turnScore = turnScore;
this.totalScore = totalScore;
this.status = status;
}
let player1 = new Player(1, 0, 0, [], 0, false);
let player2 = new Player(2, 0, 0, [], 0, false);

let rollsArray = [];

Player.prototype.rollDice = function() {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  console.log(rollValue);
  if (rollValue > 1) {
    rollsArray.push(rollValue);
    this.currentRoll = rollValue;
  } else {
    this.currentRoll = rollValue;
    this.endTurn();
  }
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
  this.currentTurnScore = 0;
};
Player.prototype.theScore = function() {
  let sum = 0;
  this.turnScore.forEach(function(element) {
    sum += element;
  });
  this.totalScore = sum;
};
Player.prototype.theTurnScore = function() {
  let sum = 0;
  rollsArray.forEach(function(element) {
    sum += element;
  });
  this.currentTurnScore = sum;
}
// User Interface Logic
$(document).ready(function(){
  $("#play").click(function(){
    $(".player1").show();
    $("#play").hide();
    $(".players").show();
    $(".dice-roll").show();
    $(".scoreboard").show();
  });
  $("#pass-player1").click(function(){
    player1.endTurn();
    player1.theScore();
    $(".player2").show();
    $(".player1").slideUp();
    $(".p1-total").text(player1.totalScore);
    });
  $("#pass-player2").click(function(){
    player2.endTurn();
    player2.theScore();
    $(".player1").show();
    $(".player2").slideUp(); 
    $(".p2-total").text(player2.totalScore); 
  });
  $("#roll-player1").click(function(){
    player1.rollDice();
    $("#dice-roll").text(player1.currentRoll);
    player1.theTurnScore();
    $(".p1-score").text(player1.currentTurnScore);
  });
  $("#roll-player2").click(function(){
    player2.rollDice();
    $("#dice-roll").text(player2.currentRoll);
    player2.theTurnScore();
    $(".p2-score").text(player2.currentTurnScore);
  });
});
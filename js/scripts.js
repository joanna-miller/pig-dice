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
  rollsArray.push(rollValue);
  this.currentRoll = rollValue;
  if (rollValue === 1) {  
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
};
Player.prototype.loserSucks = function() {
  if (this.totalScore >= 100) {
    $("#argh").show();
    $("#game-grid").hide();
    $("#loser").text(this.playerNum);
  };
};
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
    $("#roll-player2").show();
    $(".p1-score").text(player1.currentTurnScore);
    player1.loserSucks();
    });

  $("#pass-player2").click(function(){
    player2.endTurn();
    player2.theScore();
    $(".player1").show();
    $(".player2").slideUp(); 
    $(".p2-total").text(player2.totalScore); 
    $("#roll-player1").show();
    $(".p2-score").text(player2.currentTurnScore);
    player2.loserSucks();
  });

  $("#roll-player1").click(function(){
    player1.rollDice();
    $("#dice-roll").text(player1.currentRoll);
    if (player1.currentRoll === 1) {
      player1.currentTurnScore = 0;
      $("#roll-player1").hide();
    }
    player1.theTurnScore();
    $(".p1-score").text(player1.currentTurnScore);
  });

  $("#roll-player2").click(function(){
    player2.rollDice();
    if (player2.currentRoll === 1) {
      player2.currentTurnScore = 0;
      $("#roll-player2").hide();
    }
    $("#dice-roll").text(player2.currentRoll);
    player2.theTurnScore();
    $(".p2-score").text(player2.currentTurnScore);
  });

  $("#newgame").click(function() {
    location.reload();
  });
});

// Business Logic
function Player(playerNum, turnScore, totalScore, status) {
this.playerNum = playerNum;
this.turnScore = turnScore;
this.totalScore = totalScore;
this.status = status;
}

Player.prototype.turnScore = function () {
  
}





// generate random "dice roll" number from 1-6
function rollDice() {
  let rollValue = Math.floor(Math.random() * 6) + 1
  return rollValue;
}  
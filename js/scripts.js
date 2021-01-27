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

function rollDice(player) {
  let rollValue = Math.floor(Math.random() * 6) + 1
  console.log(rollValue);
  rollsArray.push(rollValue);
};

function endTurn(player) {
  let sum = 0;
  if (rollsArray.includes(1)) {
      player.turnScore.push(0);
    } else rollsArray.forEach(function(element) {
      sum += element;
    });  
  player.turnScore.push(sum);
  rollsArray = [];
};
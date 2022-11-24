const choises = ['Rock', 'Scissors', 'Paper']
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('player-score');
const handsDiv = document.getElementById('hands');

const scoreList = {humanScore: 0};

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choises[random];
  
}

function getResult(playerChoice, computerChoice) {
  let score;

  
  if (playerChoice == computerChoice) {
  score = 0;
    
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  } else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
    
  } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    score = -1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
    score = -1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
    score = -1;
  }
  
  return score;
  
}

function showResult(score, playerChoice, computerChoice) {
  scoreList['humanScore'] += score;
  console.log(scoreList['humanScore'])
  scoreDiv.innerText = scoreList['humanScore'];
  handsDiv.innerText = '👧' + playerChoice + ' vs ' + '🤖'+
    computerChoice;
  if (score == -1) {
    result.innerText = 'You Lose!'
  } else if (score == 1) {
    result.innerText = 'You Win!'
  } else if (score == 0) {
    result.innerText = 'It\'s a Draw!' 
  }

  
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = getResult(playerChoice, computerChoice);
  showResult(result, playerChoice, computerChoice);

}


function playGame() {
  const buttons = document.querySelectorAll('.rpsButton');
  console.log(buttons[2])
  for (let button of buttons) {
    button.onclick = function() {
      onClickRPS(button.value) };
  }

 document.getElementById('endGameButton').onclick = function() {
   (endGame()); }

}

function endGame() {
  scoreList.humanScore = 0;
  resultDiv.innerText = '';
  scoreDiv.innerText = '';
  handsDiv.innerText = '';
}
 playGame()


//Dom elements
let input = document.querySelector('#choice');
//let score = document.querySelectorAll('.s')


let playerChoices = [...document.querySelectorAll('.choices')];
let playerChoiceDisplay = document.getElementById('player-choice');
let computerChoiceDisplay = document.getElementById('computer-choice');
let reset = document.getElementById('reset')
let overlay = document.getElementById('overlay')
// Choices for Computer


function getPlayerSelection(e){
    let playerSelection = e.target.getAttribute('data-choice');
    playerChoiceDisplay.textContent = e.target.textContent;

     return playerSelection;
}


// Computer's choice Between Rock,Paper and Scissors.
let getComputerChoice =(choices)=>{
    let {sign,choice} =  choices[Math.floor((Math.random()* choices.length))];
    computerChoiceDisplay.textContent = sign;

    return choice;
}


//Player scores
let pScore= 0;
let compScore = 0;

let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')// Rounds of games to play

playerScore.innerText = pScore
computerScore.innerText = compScore 
let rounds = 5;


function playround(e){
    let choices = [
        {sign: '✊', choice: 'rock'},
        {sign: '✌️', choice: 'scissors'},
        {sign: '🤚', choice: 'paper'}
    ];
    let scoreDesc =  document.getElementById('score-desc');
    let pScore = document.getElementById('player-score').textContent;
    let compScore = document.getElementById('computer-score').textContent;

    let playerSelection = getPlayerSelection(e);
    let computerSelection = getComputerChoice(choices);
    
    if (playerSelection == computerSelection ){
        scoreDesc.textContent = "It's a Tie";
        return;
    }else{
        if ((playerSelection == 'rock' && computerSelection =='scissors')||
        (playerSelection == 'scissors' && computerSelection =='paper')||
        (playerSelection == 'paper' && computerSelection =='rock')){
            //playerScore++
            playerSelection[0].toUpperCase();
            scoreDesc.textContent = `You Win!! \n ${playerSelection} beats ${computerSelection}`;
            ++pScore
            document.getElementById('player-score').textContent = pScore
            rounds--;
        }else{
            computerSelection[0] = computerSelection[0].toUpperCase();
            scoreDesc.textContent =`You Lost!! \n ${computerSelection} beats ${playerSelection}`;
            ++compScore;
            document.getElementById('computer-score').textContent = compScore
            rounds--
        }
    } 
    if (rounds < 1){
     overlay.classList.add('active');
     reset.classList.add('active');  
     
    }
    
};




function gameReset(){
    rounds = 5;
    pScore = 0;
    compScore = 0;
    playerScore.innerText = pScore
    computerScore.innerText = compScore
    overlay.classList.remove('active');
    reset.classList.remove('active');
}

        playerChoices.forEach(choice =>{
            choice.addEventListener('click', playround)
        });

// Main game loop
/*
function game(){
    while (rounds > 0){
        //Player choice
        //let playerSelection = prompt('Enter ROCK, PAPER or SCISSORS: ');
        let computerSelection = getComputerChoice(choices)
        playround(playerSelection,computerSelection)
        console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + compScore +'\n'
        +'Rounds remaining: ' + rounds );
    }
    return `${playerScore > compScore? 'You Won. YaY!': 'You lost to a pc Godammit!!. LOL!'}`
}

*/
//console.log(game());

//Dom elements
let input = document.querySelector('#choice')
let playerChoices = [...document.querySelectorAll('.choices')]


function playerSelection(e){
    let playerSelection = e.target.getAttribute('data-choice')
    console.log(playerSelection);
}

playerChoices.forEach(choice =>{
    choice.addEventListener('click',playerSelection)
});

//Choices 
let choices = ['rock','paper','scissors']


// Computer's choice Between Rock,Paper and Scissors.
let getComputerChoice =(choices)=>{
    return choices[Math.floor((Math.random()* choices.length))]
    
}


//Player scores
let compScore = 0;
let playerScore = 0;

// Rounds of games to play
let rounds = 5


function playround(playerSelection, computerSelection){
    console.log( 'Player: ' + playerSelection);
    console.log('Computer: ' + computerSelection);

    if (playerSelection.toLowerCase() == computerSelection ){
        return "It's a Tie"
    }else{
        if ((playerSelection.toLowerCase() == 'rock' && computerSelection =='scissors')||
        (playerSelection.toLowerCase() == 'scissors' && computerSelection =='paper')||
        (playerSelection.toLowerCase() == 'paper' && computerSelection =='rock')){
            playerScore++
            rounds--
        }else{
            compScore++
            rounds--
        }
    } 
}


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

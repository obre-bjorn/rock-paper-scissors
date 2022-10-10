//Choices 
let choices = ['rock','paper','scissors']
//Player choice

// Computer's choice Between Rock,Paper and Scissors.
let getComputerChoice =(choices)=>{
    return choices[Math.floor((Math.random()* choices.length))]
    
}



//Computer random choice

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
            return 'You won!!!!'
        }else{
            compScore++
            rounds--
            return 'You lose!!!!'
        }
    } 
}


// Main game loop
function game(){
    while (rounds > 0){
        let playerSelection = prompt('Enter ROCK, PAPER or SCISSORS: ');
        let computerSelection = getComputerChoice(choices)
        playround(playerSelection,computerSelection)
        console.log('Player Score: ' + playerScore + '\n' + 'Computer Score: ' + compScore +'\n'
        +'Rounds remaining: ' + rounds );
    }
    return `${playerScore > compScore?'You Won. YaY!': 'You lost to pc. LOL!'}`
}


console.log(game());

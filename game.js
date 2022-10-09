//Choices 
let choices = ['rock','paper','scissors']
// Computer's choice Between Rock,Paper and Scissors.
let getComputerChoice =(choices)=>{
    return choices[Math.floor((Math.random()* choices.length))]

}

let playerSelection = "rock"

function playround(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection.toLowerCase() == computerSelection ){
        return "It's a Tie"
    }else{
        if ((playerSelection.toLowerCase() == 'rock' && computerSelection =='scissors')||
        (playerSelection.toLowerCase() == 'scissors' && computerSelection =='paper')||
        (playerSelection.toLowerCase() == 'paper' && computerSelection =='rock')){
            return 'Player has won'
        }else{
            return 'You lose'
        }
    }
}


let computerSelection = getComputerChoice(choices)

console.log(playround(playerSelection,computerSelection))

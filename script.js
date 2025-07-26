let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.querySelector('#user-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let msg = document.querySelector('#message');

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) =>{
    choice.addEventListener('click',()=>{
        const ChoiceId = choice.getAttribute('id');
        console.log(ChoiceId);
        const computerChoiceValue = computerChoice();
        console.log(computerChoiceValue);

        if(ChoiceId === computerChoiceValue) {
            console.log("It's a draw!");
            msg.textContent = "It's a draw!";
            msg.style.color = "grey";

        } else if (
            (ChoiceId === 'rock' && computerChoiceValue === 'scissors') ||
            (ChoiceId === 'paper' && computerChoiceValue === 'rock') ||
            (ChoiceId === 'scissors' && computerChoiceValue === 'paper')
        ) {
            userScore++;
            userScoreDisplay.textContent = userScore;
            
            console.log("You win!");
            msg.textContent = `You Win ! Computer chose ${computerChoiceValue}`;
            msg.style.color = "green";

        } else {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            msg.textContent = `You Lose! Computer chose ${computerChoiceValue}`;
            msg.style.color = "red";
            console.log("You lose!");
        }
    })
})
const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
} 


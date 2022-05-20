const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice, computerChoice, result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    else if (randomNumber === 3) {
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Tie!'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'you lose!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'you win!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    else if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'you lose!'
    }
    else if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'you win!'
    }
    resultDisplay.innerHTML = result
}
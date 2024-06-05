//to convert sring to number use "parseInt"
//how to select a particular element
dood = [10, 11, 12]
console.log(dood[1])

console.log('hello world')

let x = Math.random()

console.log(x)


//THE GAME CODE
let answer = prompt("Enter an answer: rock, paper or scissors: ");
const answers = ['rock', 'paper', 'scissors']; //computer's options

// Function to get a random answer
function computerAnswer() {
    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * answers.length);
    // Return the answer at the random index
    return answers[randomIndex];
}

const computerchoice = computerAnswer();
console.log(`computer anwer is ${computerchoice}`);

function HumanAnswer() {
    if (answer.toLowerCase() === 'rock') {
        return 'rock'
    } else if (answer.toLowerCase() === 'paper') {
        return 'paper'
    } else if (answer.toLowerCase() === 'scissors') {
        return 'scissors'
    }    
}

const humanchoice = HumanAnswer()
console.log(`human answer is ${humanchoice}`)

function playround() {
    if (computerchoice === humanchoice) {
        console.log('It is a tie')
    } else if ((humanchoice === 'rock' && computerchoice === 'scissors') ||
    (humanchoice === 'paper' && computerchoice === 'rock') ||
    (humanchoice === 'scissors' && computerchoice === 'paper')) {
        console.log(`you win! ${humanchoice} beats ${computerchoice}`)
    } else {
        console.log(`you lose! ${computerchoice} beats ${humanchoice}`)
    }
}

playround()
//THE GAME CODE
const p1 = document.getElementById('p-1')
const p2 = document.getElementById('p-2')
const win_id = document.getElementById('win-id')
const dialog = document.getElementById('dialog')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

//scoreboard
let humanscore = 0
let computerscore = 0


const answers = ['Rock', 'Paper', 'Scissors'];

function playround(humanchoice) {

    function computerAnswer() {
        // Generate a random index between 0 and 2
        const randomIndex = Math.floor(Math.random() * answers.length);
        // Return the answer at the random index
        return answers[randomIndex];
    }

    const computerchoice = computerAnswer();

    const human = humanchoice

    if (computerchoice === humanchoice) {
        p1.textContent = `Your choice: ${humanchoice}`
        p2.textContent = `Computer choice: ${computerchoice}`
        dialog.textContent = 'It is a tie'
        win_id.textContent = `Oh try again`
    } else if ((humanchoice === 'Rock' && computerchoice === 'Scissors') ||
        (humanchoice === 'Paper' && computerchoice === 'Rock') ||
        (humanchoice === 'Scissors' && computerchoice === 'Paper')) {
        humanscore += 1
        p1.textContent = `Your choice: ${humanchoice}`
        p2.textContent = `Computer choice: ${computerchoice}`
        dialog.textContent = `Human score is ${humanscore} and  computer score is ${computerscore}`
        win_id.textContent = `You win! ${humanchoice} beats ${computerchoice}`
    } else {
        computerscore += 1
        p1.textContent = `Your choice: ${humanchoice}`
        p2.textContent = `Computer choice: ${computerchoice}`
        dialog.textContent = `Human score is ${humanscore} and  computer score is ${computerscore}`
        win_id.textContent = `You lose! ${computerchoice} beats ${humanchoice}`
    }
}

/* for (let i = 0; i < 5; i++) {       
} */


rock.addEventListener('click', () => playround('Rock'))
paper.addEventListener('click', () => playround('Paper'))
scissors.addEventListener('click', () => playround('Scissors'))

//something
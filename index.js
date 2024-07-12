//THE GAME CODE

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

//scoreboard
let humanscore = 0
let computerscore = 0


//function playgame () {
    const answers = ['rock', 'paper', 'scissors'];

    function playround(humanchoice) {

        function computerAnswer() {
            // Generate a random index between 0 and 2
            const randomIndex = Math.floor(Math.random() * answers.length);
            // Return the answer at the random index
            return answers[randomIndex];
        }

        const computerchoice = computerAnswer();
        console.log(`computer anwer is ${computerchoice}`);

        const human = humanchoice
        console.log(`human anwer is ${humanchoice}`);

        if (computerchoice === humanchoice) {
            console.log('It is a tie')
        } else if ((humanchoice === 'rock' && computerchoice === 'scissors') ||
        (humanchoice === 'paper' && computerchoice === 'rock') ||
        (humanchoice === 'scissors' && computerchoice === 'paper')) {
            humanscore += 1
            console.log(`you win! ${humanchoice} beats ${computerchoice}`)
            console.log(`human score is ${humanscore} and  computer score is ${computerscore}`)
        } else {
            computerscore += 1
            console.log(`you lose! ${computerchoice} beats ${humanchoice}`)
            console.log(`human score is ${humanscore} and  computer score is ${computerscore}`)
        }
    }
    /* for (let i = 0; i < 5; i++) {
        
    } */
//}

rock.addEventListener('click', () => playround('rock'))
paper.addEventListener('click', () => playround('paper'))
scissors.addEventListener('click', () => playround('scissors'))

//something
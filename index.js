//THE GAME CODE

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

//scoreboard
let humanscore = 0
let computerscore = 0

//gotta make a loop for 5 rounds and also needs to add a score board
function playgame () {
    for (let i = 0; i < 5; i++) {
        function answer() {
            if (rock.addEventListener("click", function () {
                answer = 'rock'
            })) {
                return 'rock'
            } else if (paper.addEventListener("click", function () {
                answer = 'paper'
            })){
                return 'paper'
            } else if (scissors.addEventListener("click", function () {
                answer = 'scissors'
            })) {
                return 'scissors'
            }

        }

        const zanswer = answer();
        console.log(`human answer is ${zanswer}`)

        const answers = ['rock', 'paper', 'scissors'];

        function computerAnswer() {
            // Generate a random index between 0 and 2
            const randomIndex = Math.floor(Math.random() * answers.length);
            // Return the answer at the random index
            return answers[randomIndex];
        }

        const computerchoice = computerAnswer();
        console.log(`computer anwer is ${computerchoice}`);

        function HumanAnswer() {

        }

        const humanchoice = HumanAnswer()
        console.log(`human answer is ${humanchoice}`)

        function playround(humanchoice, computerchoice) {
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
        
        playround()
    }
}

playgame ()
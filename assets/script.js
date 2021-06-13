/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/

const startBtn = document.querySelector(".start-button")
const questionContainerElement = document.getElementById('question-container')
const timeLeftDisplay = document.querySelector('#time-left')
let timeLeft = 76

//This brings up the first question when user clicks start button

startBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    
}

// This starts the timer when user clicks start button

function countDown(){ 
    setInterval(function(){
        if(timeLeft <= 0) {
        clearInterval(timeLeft = 0)

    }

        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)

}

startBtn.addEventListener('click', countDown)

    




// function startGame() {

// }

// function selectQuestion() {

// }

// Questions

// const questions = [
//      {
//          question: "Which of the following number object function returns the value of the number?",
//          answers: 
         
//          ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
//          answer: "valueOf()"

//     },

//     {
//         title: "Which of the following variables takes precedence over the others if the names are the same??",
//         choices: ["global variable", "the local element", "the two of the above", "none of the above"],
//         answer: "the local element"
//     },

//     {
//         title: "The function and var are known as",
//         choices: ["keywords", "data types", "declaration statements", "prototypes"],
//         answer: "declaration statements"
//     },

//     {
//         title: "In JavaScript the x===y statement implies that:",
//         choices: ["both x and y are equal in value, type and reference address", "both are x and y are equal in value only", "both are equal in the value and data type", "both are not same at all"],
//         answer: "both are equal in the value and data type"
//     },

//     {

//         title: "String values must be enclosed within ____ when being assigned to variables.",
//         choices: ["commas", "curly brackets", "quotes", "parenthesis"],
//         answer: "quotes"
//     },

// ];
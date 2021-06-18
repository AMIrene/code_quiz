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


//start game and timer
const startBtn = document.querySelector(".start-button");
const questionContainerElement = document.getElementById('question-container');
const timeLeftDisplay = document.querySelector('#time-left');
const timesUp = document.querySelector('#time-over');
let timeLeft = 75;


// This starts the timer when user clicks start button

function countDown() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
            if (availableQuestions.length === 0) {
                gameOver();
            }

        }

        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)


}


startBtn.addEventListener('click', countDown)

//This brings up the first question when user clicks start button

startBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')

};

//question and answer 
const questionItem = document.querySelector('#question');
const answerItems = Array.from(document.getElementsByClassName('question-button'));


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which of the following number object function returns the value of the number?",
        choice1: "toString()",
        choice2: "toPrecision()",
        choice3: "toLocaleString()",
        choice4: "valueOf()",
        answer: 4,
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        choice1: "global variable",
        choice2: "the local element",
        choice3: "the two of the above",
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: "The function and var are known as",
        choice1: "keywords",
        choice2: "data types",
        choice3: "declaration statements",
        choice4: "prototypes",
        answer: 3,
    },

    {
        question: "In JavaScript the x===y statement implies that:",
        choice1: "both x and y are equal in value, type and reference address",
        choice2: "both are x and y are equal in value only",
        choice3: "both are equal in the value and data type",
        choice4: "both are not same at all",
        answer: 3,
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choice1: "commas",
        choice2: "quotes",
        choice3: "curly brackets",
        choice4: "parenthesis",
        answer: 2,
    },

];
//scoring and  number of questions in total
const CORRECT_POINT = 20;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};


getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    //randomise questions shown to user
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answerItems.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

//This identifies which answer user has selected
answerItems.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        console.log(choice);
        // if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });

    //Game over function
    function gameOver(){
        timesUp.remove('hide')
    }
});



startGame();
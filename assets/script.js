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


//scoring and  number of questions in total
let CORRECT_POINT = 20;
const INCORRECT_TIME_DEDUCTION = 10;
const MAX_QUESTIONS = 5;

// DOM elements

// Start elements
const startBtn = document.querySelector(".start-button");
const timeLeftDisplay = document.querySelector('#time-left');
const introElement = document.getElementById('instruction-msg');
const timerElement = document.querySelector(".timer-container");
const questionContainerElement = document.getElementById('question-container');
const submitScore = document.querySelector('#submit-section');
const scoreDisplay = document.querySelector('#score-count');
const quizTitle = document.querySelector(".heading");


// Running elements
const questionItem = document.querySelector('#question');
const answerItems = Array.from(document.getElementsByClassName('question-button'));

const question1Container = document.getElementById('question1-container');
const question2Container = document.getElementById('question2-container');
const question3Container = document.getElementById('question3-container');
const question4Container = document.getElementById('question4-container');
const question5Container = document.getElementById('question5-container');

// Finished elements
const timesUp = document.getElementById('time-over');
const submitBtnElement = document.getElementById("submit-btn");
const enterInitial = document.getElementById("username");


// State variables- keeps track of user 
// let acceptingAnswers = false; // remove
let currentScore = 0;
let currentQuestionNo = 0;
let timeLeft = 75; //start with 75 seconds



const questions = [
    {
        number: 1,
        answer: 4,
    },
    {
        number: 2,
        answer: 2,
    },
    {
        number: 3,
        answer: 3,
    },

    {
        number: 4,
        answer: 3,
    },

    {
        number: 5,
        answer: 2,
    },

];



// This starts the timer when user clicks start button

function countDown() {
    let intervalId = setInterval(function () {

        if (timeLeft <= 0) {

            timesUp.classList.remove('hide');
            gameOver();
            clearInterval(intervalId);

        }

        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000)


}

//Game over function
function gameOver() {


    questionContainerElement.classList.add('hide');
    introElement.classList.add('hide');
    timerElement.classList.add('hide');
    // show the ending screen, which contains final score, initial input and submit button
    submitScore.classList.remove('hide');
    quizTitle.classList.add('hide')
    showScore();
}

//one complete callback setup to submit score and initials
submitBtnElement.addEventListener('click', submitBtnCallback);

function submitBtnCallback(event) {
    event.preventDefault();
    console.log(enterInitial.value);
   


    const userName = enterInitial.value;

    const score = {
        'enterInitial': enterInitial.value,
        'currentScore': scoreDisplay.textContent
    }
    let newScores = [];

    // Get existing scores and concat if they exist
    const existingScores = JSON.parse(localStorage.getItem('scores'))
    if (existingScores) {
        //this scenario when there are existing high scores
        newScores = newScores.concat(existingScores);
    }

    newScores.push(score);
    localStorage.setItem('scores', JSON.stringify(newScores));
    window.location.replace("highscore.html");
}



function showScore() {

    //when the user finishes all the questions, the final score is displayed 
    scoreDisplay.textContent = currentScore;


}

//This brings up the first question when user clicks start button

startBtn.addEventListener('click', startBtnClick)
function startBtnClick() {

    // transition to quiz running state
    startBtn.classList.add('hide');
    introElement.classList.remove('hide');

    //set the first question to visible
    questionContainerElement.classList.remove('hide');
    question1Container.classList.remove('hide');
    timerElement.classList.remove('hide');
    quizTitle.classList.remove('hide');

    countDown();
};


// Bind click event for all answer buttons
const answerButtons = document.getElementsByClassName("question-button");
for (let i = 0; i < answerButtons.length; i++) {
    const btnElement = answerButtons[i];
    btnElement.addEventListener('click', answerCallback);
}

function answerCallback(e) {
    const btnElement = e.target;
    const newQuestion = btnElement.dataset.quest;

    const choiceNumber = btnElement.dataset.number;
    const questionNumber = btnElement.parentNode.parentNode.dataset.questionNumber;

    // get answer
    const currentQuestion = questions.find(question => question.number == questionNumber);
    const answerCheckcorrect = document.getElementById("check-answer-correct");
    const answerCheckincorrect = document.getElementById("check-answer-incorrect");
    if (currentQuestion.answer == choiceNumber) {
        // this is a correct answer
        // add to the score
        currentScore += 20;
        answerCheckcorrect.classList.remove('hide');
        answerCheckincorrect.classList.add('hide');



    } else {
        // this is incorrect
        // decrement timer
        timeLeft -= 10;
        answerCheckincorrect.classList.remove('hide');
        answerCheckcorrect.classList.add('hide');


    }

    //this moves user from question to question when user selects answer

    if (newQuestion == 1) {
        questionContainerElement.classList.remove('hide');
        question1Container.classList.add('hide');
        question2Container.classList.remove('hide');
        timerElement.classList.remove('hide');
    }
    else if (newQuestion == 2) {
        question2Container.classList.add('hide');
        question3Container.classList.remove('hide');
    }

    if (newQuestion == 3) {
        questionContainerElement.classList.remove('hide');
        question3Container.classList.add('hide');
        question4Container.classList.remove('hide');
        timerElement.classList.remove('hide');
    }
    else if (newQuestion == 4) {
        question4Container.classList.add('hide');
        question5Container.classList.remove('hide');
    }

    if (newQuestion == 5) {

        gameOver();

    }

}




































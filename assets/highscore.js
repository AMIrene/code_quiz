const goBack = document.querySelector("#back-button");
const clearScore = document.querySelector("#clear-score");
const highScoreList = document.querySelector('.score-list');


//Clear score when user clicks clear score button

clearScore.addEventListener('click', clearScorebtnClick)
function clearScorebtnClick() {
    localStorage.clear();
    location.reload();
 
};

//Retrieves scores logged in local storage
const existingScores = JSON.parse(localStorage.getItem('scores'))
if (existingScores) {

    for (var i = 0; i < existingScores.length; i++) {

        let createList = document.createElement("li");
        createList.textContent = existingScores[i].enterInitial + " " + existingScores[i].currentScore;
        highScoreList.appendChild(createList);
    }
}
    //go back to main page
    goBack.addEventListener('click', goBacktoMainpage)
    function goBacktoMainpage() {
        window.location.replace("index.html");
    
};
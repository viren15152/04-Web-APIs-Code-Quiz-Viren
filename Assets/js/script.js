//Variables declaration:
var currentQuestion = 0;
var score = 0;
var c = 300;
var totquestions = questions.length;
var questionContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var resultBtn = document.getElementById("result");

//This section will load the questions and allow the user to select their options
function loadNextQuestion() {
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(userChoice){
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion ++;
    if (currentQuestion == totquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display='none';
        result.style.display="";
        result.textContent = score;
        return;
    }
    loadQuestion(currentQuestion);
}

//Timer (Stopwatch)

var myTimer;
function clock () {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}
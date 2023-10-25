//Variables declaration:
var currentQuestion = 0;
var score = 0;
var c = 300;
//var totquestions = questions.length;
var questionContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("stimulus");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var radio4 = document.getElementById("radio4");
var startBtn = document.getElementById("start");
var info = document.getElementById("info");
var resultBtn = document.getElementById("result");


opt1.addEventListener("click",checkAnswer)
opt2.addEventListener("click",checkAnswer)
opt3.addEventListener("click",checkAnswer)
opt4.addEventListener("click",checkAnswer)


var questions   = [{
    question: "What does HTML stand for?",
    option1: "Home Tool Mark Up Language",
    option2: "Hyperlinks and Text Markup Langauge",
    option3: "Hyper Text Markup Langauge",
    option4: "How to Make Langauges",
    answer: "3"
},
{
    question: "Who is making the Web Standards?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Apple",
    option4: "Microsoft",
    answer: "2"
},
{
    question: "Choose the correct HTML element for the largest heading?",
    option1: "<h6></h6>",
    option2: "<h1></h1>",
    option3: "<head></head>",
    option4: "<heading></heading>",
    answer: "2"
},
{
    question: "What is the correct element for inserting a line break?",
    option1: "<br>",
    option2: "<lb>",
    option3: "<break>",
    option4: "<break>",
    answer: "1"

},
{
    question: "Inside which element do we put the JavaScript",
    option1: "<JavaScript>",
    option2: "<scripting>",
    option3: "<script>",
    option4: "<java>",
    anser: "3"
},
{
    question: "What Does CSS stand for?",
    option1: "Colourful Style Simulator",
    option2: "Creative Style Sheets",
    option3: "Cascading Style Sheets",
    option4: "Computer Style Sheets",
    answer: "3"

},
{ 
    question: "Where is the correct place to refer to an external style sheet?",
    option1: "At the end of the document",
    option2: "In the <body> section",
    option3: "In the <head> section",
    option4: "In the <h1> section",
    answer: "3"
},
{
    question: "Choose the correct HTML Elment to define important text",
    option1: "<b>",
    option2: "<i>",
    option3: "<important>",
    option4: "<strong>",
    answer: "4"
},
{
    question: "In HTML which character is used to define an end tag?",
    option1: "<!>",
    option2: "<^>",
    option3: "</>",
    option4: "<$>",
    answer: "3"
},
{
    question: "How can you make a numbered list in HTML",
    option1: "<list>",
    option2: "<ol>",
    option3: "<li>",
    option4: "<ul>",
    answer: "2"

},

];

//This section will load the questions and allow the user to select their options
function loadNextQuestion() {
   questionEl.innerText = questions[currentQuestion].question
   radio1.innerText = questions[currentQuestion].option1
   radio2.innerText = questions[currentQuestion].option2
   radio3.innerText = questions[currentQuestion].option3
   radio4.innerText = questions[currentQuestion].option4
}
function checkAnswer(event){
    //var userChoice = document.querySelector('input[type=radio]:checked');
   var userChoice = event.target.value
   console.log(userChoice)
   
    if(questions[currentQuestion].answer === userChoice){
        score += 1;
    }
  
   
    //if (currentQuestion == totquestions){
        //startBtn.style.visibility='hidden';
        //nextBtn.style.visibility='hidden';
        //quizContainer.style.display='none';
        //result.style.display="";
        //result.textContent = score;
        //return;
    //}
    if(currentQuestion < questions.length -1) {
        currentQuestion ++
        event.target.checked = false;
        loadNextQuestion();
    }
    
}

//Timer (Stopwatch)//My timer was working in previous commits but has suddenly stopped working I'm not really sure what the issue is.

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
function startQuiz(){
    info.style.display = "none";
    loadNextQuestion()
}

document.getElementById("start").addEventListener("click",startQuiz)


let timerEl = document.getElementById("timer");
let startBtn = document.querySelector(".start-btn");
let questionEl = document.getElementById("question");
let answerBtns = document.getElementById("answer-btn");
// let answerA = document.getElementById("A");
// let answerB = document.getElementById("B");
// let answerC = document.getElementById("C");
var answers = 0;
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.querySelector("submit-btn");
var questionNumber = 0;
var timerCount = 0;
var scoreCount = 0;

// let progress = document.getElementById("proguess");
// let scoreContainer = document.getElementById("scoreContainer")

// startButton.addEventListener("click",setTime);
// var startBtn = document.createElement("button");
// startBtn.innerHTML="#start-btn"


//    document.getElementById("startBtn").addEventListener("click",
//    function(){
// document.getElementById("question");
//    });

// function displayQuestions () {
//    questionEl.textContent = myQuestions[questionNumber].myQuestions;
   
// }



startBtn.addEventListener("click", setTime);

var secondsLeft = 5;



// this function will tell user how much time they have left 
function setTime() {
   var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + "seconds left";

      if (secondsLeft === 0) {
         clearInterval(timerInterval);
      }
   }, 1000);
}

renderQuestion ();

function renderQestion(){
question.innerHtml = "";
myQuestions.textContent      

}


// / when timer is up include button to save scores----


// console.log(timeInterval)
//       let secondsLeft =10;
//       secondsLeft--;
//       return;
//       time.textContent=(secondsLeft + ""+ "time left");
// function renderQestion(){
//    for (var i = 0; i < question.length; i++);


// }); 
// renderQuestion(questions[1]) ;
// for ( var i = 0; i<questions.length; i++);
// console.log(renderQuestion)

// on submit, show results 
// submitBtn.addEventListener("click", showResults);
// var currentQuestion = 0;
// var userChoice = "alert";

// if (userChoice ===question[currentQuestion])

//array with questions, answer choices, and right answers
var myQuestions = [
   {
      question: "Inside of which HTML element do we put the Javascript?",
      answers: ["<script>","<css>","<scripting>"],
      correctAnswer: 0
   },
   {
      question: "When was JavaScript created?",
      answers: ["2020","1898","1995"],
      correctAnswer: 2
   },
   {
      question: "What does CSS stand for?",
     answers: ["World Wide Web","Cascading Style Sheets","Cursor style shift"],
      correctAnswer: 1

   }
]

// console.log(myQuestions)

displayQuestions()

// function displayQuestions(event){
//    event.prevent
// }



function buildQuiz() { }
function showResults() { }

// display quiz right away


// function buildQuiz() {
//    var output = [];

//    myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
//          var answers = [];
//          for (lecurrentQuestion.answers) {
//             answers.push()
//          }
//       }
//    )

// }


// <label>
// <input type="radio" name="question${questionNumber}"
//    value="${letter}">
//    ${letter} :
//    ${currentQuestion.answers[letter]}
// </input>
// </label>
// create variables for functions



// renderQuestion()

// function renderQuestion() {
//    for (var i = 0; i < question.length; i++);
//    console.log("renderQestion");
//    let q = question[i];
//    console.log("q");
// }

// render
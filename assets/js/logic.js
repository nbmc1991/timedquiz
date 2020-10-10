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




// function displayQuestions () {
//    questionEl.textContent = myQuestions[questionNumber].myQuestions;
   
// }


function start (){
   setTime()
   displayQuestions()
};

startBtn.addEventListener("click",start);

var secondsLeft = 60;



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
var myQuestions = [
   {
      question: "Inside of which HTML element do we put the Javascript?",
      answers: ["<script>","<css>","<scripting>"],
      correctAnswer: "<script>"
   },
   {
      question: "When was JavaScript created?",
      answers: ["2020","1898","1995"],
      correctAnswer: "1995"
   },
   {
      question: "What does CSS stand for?",
     answers: ["World Wide Web","Cascading Style Sheets","Cursor style shift"],
      correctAnswer: "Cascading Style Sheets"

   }
]

// console.log(myQuestions)



function displayQuestions(){
   console.log(myQuestions[questionNumber])
   var thisQuestion = myQuestions[questionNumber];
   document.getElementById("question").textContent=thisQuestion.question;
   document.getElementById("choiceA").textContent=thisQuestion.answers[0];
   document.getElementById("choiceB").textContent=thisQuestion.answers[1];
   document.getElementById("choiceC").textContent=thisQuestion.answers[2];
  
}
var buttons = document.querySelectorAll(".answerBtn")
buttons.forEach(function (thisButton){
   thisButton.addEventListener("click",checkAnswer);

});

function checkAnswer (){
   console.log(this.textContent)
   var results = "";
   if (this.textContent===myQuestions[questionNumber].correctAnswer){
      console.log("correct")
      results ="correct"

   }else {
      console.log("incorrect")
      results = "incorrect"
   }
document.getElementById("right-answer").textContent= results
}

function next (){
   questionNumber++;
   if (questionNumber>=myQuestions.length){
      gameover()
      return;
   }
   displayQuestions()
   document.getElementById("right-answer").textContent= "";


};

function gameover(){
   console.log("gameover")
};

nextBtn.addEventListener("click",next);




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
let timeEl = document.querySelector(".time");
let startBtn = document.getElementById("start-btn");
let question = document.getElementById("question");
let answerBtns = document.getElementById("answer-btn")
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let nextBtn = document.getElementById("next-btn")
let submitBtn = document.querySelector("submit-btn")
// let progress = document.getElementById("proguess");
// let scoreContainer = document.getElementById("scoreContainer")

// startButton.addEventListener("click",setTime);
// var startBtn = document.createElement("button");
// startBtn.innerHTML="#start-btn"


//    document.getElementById("startBtn").addEventListener("click",
//    function(){
// document.getElementById("question");
//    });

startBtn.addEventListener("click", setTime);

var secondsLeft = 10;


// this function will tell time,
function setTime() {
   var timerInterval = setInterval(function () {
      console.log(timerInterval)
      secondsLeft--;
      console.log(secondsLeft)
      timeEl.textContent = secondsLeft + "seconds left";

      if (secondsLeft === 0) {
         clearInterval(timerInterval);
      }
   }, 1000);
}


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




var myQuestions = [
   {
      question: "What does HTML stand for?",
      answers: {
         choiceA: "only works on mac",
         choiceB: "hyper text markup language",
         choiceC: "hypo active language",
      },
      correctAnswer: "B",
   },
   {
      question: "What is JavaScript?",
      choiceA: "easy",
      choiceB: "hard",
      choiceC: "programming language",
      correctAnswer: "C"
   },
   {
      question: "What does WWW stand for?",
      choiceA: "World Wide Web",
      choiceB: "What went wrong",
      choiceC: "none of the above",
      correctAnswer: "A",

   }
]

console.log(myQuestions)

function buildQuiz() { }
function showResults() { }

// display quiz right away
function buildQuiz() {
   var output = [];

   myQuestions.forEach(
      (currentQuestion, questionNumber) => {
         var answers = [];
         for (letter in currentQuestion.answers) {
            answers.push()
         }
      }
   )

}


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
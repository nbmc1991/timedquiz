let time = document.querySelector(".time");
let startBtn = document.getElementById("startBtn");
let question = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let progress = document.getElementById("proguess");
let scoreContainer = document.getElementById("scoreContainer")

// startButton.addEventListener("click",setTime);
// var startBtn = document.createElement("button");
// startBtn.innerHTML="#start-btn"
 

//    document.getElementById("startBtn").addEventListener("click",
//    function(){
// document.getElementById("question");
//    });

startBtn.addEventListener("click",setTime);


function setTime(){
   let timeInterval = setInterval(function(){
      console.log(timeInterval)
      let secondsLeft =10;
      secondsLeft--;
      return;
      time.textContent=(secondsLeft + ""+ "time left");
   },1000);
}; 

// function renderQestion(){
//    for (var i = 0; i < question.length; i++);
   

// });



let questions = [
   {
      question: "What does HTML stand for?",
      choiceA: "only works on mac",
      choiceB: "hyper text markup language",
      choiceC: "hypo active language",
      correct: "B",
   },
   {
      question: "What is JavaScript?",
      choiceA: "easy",
      choiceB: "hard",
      choiceC: "programming language",
      correct: "C"
   },
   {
      question: "What does WWW stand for?",
      choiceA: "World Wide Web",
      choiceB: "What went wrong",
      choiceC: "none of the above",
      correct: "A",

   }
]

// create variables for functions



// renderQuestion()

// function renderQuestion() {
//    for (var i = 0; i < question.length; i++);
//    console.log("renderQestion");
//    let q = question[i];
//    console.log("q");
// }

// render

var QandA = [
    {
        title: "What constellation is on the Australian flag?",
        choices: ["The milky way", "The southern cross", "Orion", "Ursa Minor"],
        answer: "The southern cross"
    },
    {
        title: "In Norway what do they call their currency?",
        choices: ["Krone", "Dollar", "Pesos", "Pounds"],
        answer: "Krone"
    },
    {
        title: "Which is a popular dish in Puerto Rico?",
        choices: ["Poutine", "Mofongo", "Fish & Chips", "Meat Pie"],
        answer: "Mofongo"
    },
    {
        title: "How many provinces are there in Canada?",
        choices: ["Fifty", "Six", "Fourteen", "Ten"],
        answer: "Ten"
    },
    {
        title: "Which country is not a Scandinavian country?",
        choices: ["Denmark", "Sweden", "Germany", "Norway"],
        answer: "Germany"
    }

]

var qIndex = 0;
 var time = QandA.length * 15
 var timerId;
 var quiz = document.getElementById("quiz");
 var choices = document.getElementById("choices");
 var BtnStart = document.getElementById("BtnStart");
 var foot = document.getElementById("foot")
 var timer = document.getElementById("time");
 var score = document.getElementById("score");



 function startQuiz(){
     var startScreen = document.getElementById("start");
     startScreen.setAttribute("class", "hide");
     quiz.removeAttribute("class")
     timerId = setInterval(clockTick, 1000) // run clock function inside set interval
     timer.textContent = time
     getQuestion()
 }

 function getQuestion(){
     var currentQuestion = QandA [qIndex]
     var questionTitle = document.getElementById("questionTitle");
     questionTitle.textContent = currentQuestion.title 
     choices.innerHTML ="";
     currentQuestion.choices.forEach(function (choice,i){
         var choiceBtn = document.createElement("button")
         choiceBtn.setAttribute("class", "choice")
         choiceBtn.setAttribute("value", choice)
         choiceBtn.textContent= i+1+"."+ choice
         choiceBtn.onclick = questionClick
         choices.appendChild(choiceBtn)
     })
     
 }

 function questionClick(){
     if (this.value != QandA[qIndex].answer){
         time -= 15
         if (time < 0){time= 0 }
     }
     timer.textContent = time 
     qIndex++;
     if(qIndex === QandA.length){
         endQuiz()
     } else {
         getQuestion()
     }

 }

 function endQuiz(){
     clearInterval(timerId)
     var endScreen = document.getElementById("endScreen")
     endScreen.removeAttribute("class")
     quiz.setAttribute("class", "hide")
     var finalScore = document.getElementById("finalScore")
     finalScore.textContent ("your final score is " + time)
 }

 function clockTick(){
     time--;
     timer.textContent=time 
     if ( time <= 0){
         endQuiz();
     }
 }

 function saveHighScore(){
     var initials = document.getElementById("initials")
     var initialInput = initials.value.trim();
     if( initialsInput != ""){
         var highScore = JSON.parse(window.localStorage.getItem("High Scores") || [] )
         var newScore = {
             score: time,
             initials: initialInput,
         } 
         highScore.push(newScore) 
         window.localStorage.setItem("High Scores", JSON.stringify(highScore))
     }
 }

 
 BtnStart.onclick = startQuiz














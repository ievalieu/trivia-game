/*Pseudo Code
1. Add button to screen.
2. User can CLICK on Start Button to begin trivia game
3. Timer for question starts
4. Question shows
5. Answers show
6. User can HOVER over answers to choose and CLICK
7. Boolean value, true or false for right answer
	-False-> Wrong! Replaces Question; The Correct Answer replaces Answers; Insert Pic for certain time
	-True-> 
8. Run out of time. Out of Time! replaces question; the correct answer and pic shown
9. Immediately move on to next question after a certain time. 
10. Correct! replaces Question. and pic.
11. Start Over! Button CLICK
*/

//Questions
var q1 = {
	question: "What is the capital of Italy?",
	answer: "Rome",
	inAns1: "Milan",
	inAns2: "Venice",
	inAns3: "Florence", 
}
var q2 = {
	question: "What is Spain most famous for out of the following?",
	answer: "Bull Fights",
	inAns1: "Seafood",
	inAns2: "Hot Sauce",
	inAns3: "Basketball", 
}
var q3 = {
	question: "In London, the \"Tube\" refers to which of the following?",
	answer: "Underground Railway System",
	inAns1: "A Cyclical-Shaped Desert",
	inAns2: "Spyglass",
	inAns3: "Roll of Toilet Paper", 
}
var q4 = {
	question: "Which river in France recently flooded in June 2016?",
	answer: "Seine River",
	inAns1: "Loire River",
	inAns2: "Garonne River",
	inAns3: "Saône River", 
}
var q5 = {
	question: "At Otowa Waterfall in Japan, you can drink from one of the three streams to be granted which of three blessings?",
	answer: "Success, Love, or Longevity",
	inAns1: "Wealth, Health, or Friendship",
	inAns2: "Intelligence, Purity, or Happiness",
	inAns3: "Beauty, Fertility, or Wisdom", 
}

var questions = [q1, q2, q3, q4, q5];

//String Values
var timerText = "Time Remaining: ";
var right = "Correct!";
var wrong = "Wrong!";
var answerIs = "The Correct Answer was: ";
var resultText = "All done, here's how you did!";

//Variables
var totalQuestions = 5;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var resetClicked = false;

//Time
var timer = 30;

/*-----Script Starts----*/
//$(document).ready(function(){});
$("button").hide();
$(".resetBtn").hide();
$(".startGameBtn").show();
$("button").on("click", gameStart);

/*	$(".choices").on("click", function(){
		$(this).attr("value");
	});
*/

function gameStart(){ 
	//display game default text
	$(".startGameBtn").hide();
	countDown();
	if(timer === 0){
		showQuestion();
	}

	for(var i = 0; i < questions.length; i++){
		showQuestion(i);
	   	function showQuestion(num){ //show for 30 seconds
			//shows next question to html
			//shows answer choices to html
			$(".question").html(questions[num].question);
		  	$(".choice1").html(questions[num].inAns1);
		 	$(".choice2").html(questions[num].inAns2);
		  	$(".choice3").html(questions[num].inAns3);
		  	$(".choice4").html(questions[num].answer);
		
//Work on click event and if else statements for correct/wrong answers

		}
   	} 

   	//	totalQuestion--;
	//}

    $(".choices").show();
   	$(".choices").hover(
   		function(){
   			$(this).css("border", "3px solid blue");
   			$(this).css("background", "linear-gradient(white, lightgrey)");
   		},
   		function(){
   			$(this).css("border", "none");
   			$(this).css("background", "none");
   		}
   	);
   	
}
function userChoosesAnswer(){
	//if(true){rightAnswerResult()}
	//if(false){wrongAnswerResult()}
}
function timeRunsOut(){
	/*if(time === 0){
		-display to html "Out of Time!"
		-wrongAnswerResult();
		-showQuestion();
	}*/
}
function wrongAnswerResult(){ //show for 5 seconds
	//display to html "Wrong Answer!"
	//display to html "The Correct Answer is: ..."
	//showQuestion();
}
function rightAnswerResult(){ //show for 5 seconds
	//display to html "Correct!"
	//showQuestion();
}
//totalQuestions = 1;
if(totalQuestions === 0){
	resultPage();
}
function resultPage(){
	$(".resultText").html(resultText);
	$(".numCorrect").html("Correct Answers: " + numCorrect);
	$(".numIncorrect").html("Incorrect Answers: " + numIncorrect);
	$(".numUnanswered").html("Unanswered: " + numUnanswered);
	
	$(".resetBtn").show();
	$(".resetBtn").on("click", function(){
		resetClicked = true;
	});

	if(resetClicked === true){
		resetGame();
		function resetGame(){
			totalQuestions = 5;
			numCorrect = 0;
			numIncorrect = 0;
			numUnanswered = 0;
			resetClicked = false;
			//check if variables change
			console.log(numCorrect, numUnanswered, numIncorrect, resetClicked);
		}
		startGame();
	}
}

function countDown(){
	counter = setInterval(decrement, 1000);
}
function decrement(){
	timer--;
	  
	$(".timer").html(timerText + timer);
		if(timer===0){
	    	resetTimer(); 
		}
	}
function resetTimer(){
	clearInterval(counter);
}
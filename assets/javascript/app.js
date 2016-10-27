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
var q0 = {
	question: "What is the capital of Italy?",
	answer: "Rome",
	inAns1: "Milan",
	inAns2: "Venice",
	inAns3: "Florence", 
}
var q1 = {
	question: "What is Spain most famous for out of the following?",
	answer: "Bull Fights",
	inAns1: "Seafood",
	inAns2: "Hot Sauce",
	inAns3: "Basketball", 
}
var q2 = {
	question: "In London, the \"Tube\" refers to which of the following?",
	answer: "Underground Railway System",
	inAns1: "A Cyclical-Shaped Desert",
	inAns2: "Spyglass",
	inAns3: "Roll of Toilet Paper", 
}
var q3 = {
	question: "Which river in France recently flooded in June 2016?",
	answer: "Seine River",
	inAns1: "Loire River",
	inAns2: "Garonne River",
	inAns3: "Saône River", 
}
var q4 = {
	question: "At Otowa Waterfall in Japan, you can drink from one of the three streams to be granted which of three blessings?",
	answer: "Success, Love, or Longevity",
	inAns1: "Wealth, Health, or Friendship",
	inAns2: "Intelligence, Purity, or Happiness",
	inAns3: "Beauty, Fertility, or Wisdom", 
}

var questions = [q0, q1, q2, q3, q4];

//String Values
var timerText = "Time Remaining: ";
var right = "Correct!";
var wrong = "Wrong!";
var answerIs = "The Correct Answer was: ";
var resultText = "All done, here's how you did!";

//Variables
var questionNum = 0; //0-4 for loop
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
$(".startGameBtn").on("click", gameStart);



function gameStart(){ 
	//display game default text
	$(".startGameBtn").hide();
	
	showQuestion(0);
	function showQuestion(num){ //show for 30 seconds
		countDown();
		//shows next question to html
		$(".question").html(questions[num].question);
	  	//shows answer choices to html
	  	
	  	var arr = [questions[num].inAns1, questions[num].inAns2, questions[num].inAns3, questions[num].answer];
		arr = shuffle(arr);
		console.log(arr);
		
		for(var i = 0; i < arr.length; i++){
		  	$(".choice"+[i]+"").html(arr[i]).attr("value", arr[i]);
		  	console.log()
		}
		var userChoice = "";
		$(".choices").on("click", function(num){
			userChoice = $(this).attr("value");
			console.log(num);
			console.log(userChoice);
			return userChoice;
		});
		console.log(userChoice);
		checkUserChoice(num, userChoice);
	}

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
function checkUserChoice(num, userChoice){
	console.log(userChoice);
	if(userChoice === questions[num].answer){
		console.log(userChoice + questions[num].answer + " Correct!");
	}else{
		console.log(userChoice + "Wrong!");
	}
	
	//if(true){rightAnswerResult()}
	//if(false){wrongAnswerResult()}
}

function wrongAnswerResult(){ //show for 5 seconds
	$(".rightOrWrong").html("Wrong Answer!");
	$(".correctAnswer").html("The Correct Answer is...");
	setTimeout(showQuestion(), 5000);
	//display to html "The Correct Answer is: ..."

}
function rightAnswerResult(){ //show for 5 seconds
	$(".rightOrWrong").html("Correct!");
	setTimeout(showQuestion(), 5000);
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
	    	$(".timer").html("Out of Time!");
			wrongAnswerResult();
			showQuestion(); 
		}
	}
function resetTimer(){
	clearInterval(counter);
}
//Knuth Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
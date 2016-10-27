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
var answers = {
	q0: "Rome",
	q1: "Bull Fights",
	q2: "Underground Railway System",
	q3: "Seine River",
	q4: "Success, Love, or Longevity"
}
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
var userChoice = "none";
//Time
var timer = 30;

/*-----Script Starts----*/
$(document).ready(function(){

$("button").hide();
$(".resetBtn").hide();
$(".choices").hide();
$(".startGameBtn").show();
$(".startGameBtn").on("click", gameStart);

	function gameStart(){ 
		//display game default text
		$(".startGameBtn").hide();
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
		
		questionNum = 0;

		showQuestion(questionNum);
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
			}
				console.log($(".choice0").attr("value"));
			  	console.log($(".choice1").attr("value"));
			  	console.log($(".choice2").attr("value"));
			  	console.log($(".choice3").attr("value"));
				console.log(userChoice + "is chosen yet."); //not yet chosen
		}
		//user choice function
		$(".choices").on("click", function(questionNum){
			var answers = {
				q0: "Rome",
				q1: "Bull Fights",
				q2: "Underground Railway System",
				q3: "Seine River",
				q4: "Success, Love, or Longevity"
			}
			userChoice = $(this).attr("value");	
			console.log("userChoice is: " + userChoice);
			//HACK, won't read (questions[questionNum].answer) WHY?
			if(userChoice === answers.q0){
				console.log(userChoice + answers.q0 + " Correct!");
				rightAnswerResult();
			}else if(userChoice === answers.q1){
				console.log(userChoice + answers.q1 + " Correct!");
				rightAnswerResult();
			}else if(userChoice === answers.q2){
				console.log(userChoice + answers.q2 + " Correct!");
				rightAnswerResult();
			}else if(userChoice === answers.q3){
				console.log(userChoice + answers.q3 + " Correct!");
				rightAnswerResult();
			}else if(userChoice === answers.q4){
				console.log(userChoice + answers.q4 + " Correct!");
				rightAnswerResult();
			}else {
				console.log(userChoice + "Wrong!");
				wrongAnswerResult();
			}

		});	

			questionNum++;
			totalQuestions--;
	}

});

function wrongAnswerResult(){ //show for 5 seconds
	var answers = {
			q0: "Rome",
			q1: "Bull Fights",
			q2: "Underground Railway System",
			q3: "Seine River",
			q4: "Success, Love, or Longevity"
	}
	resetTimer();
	numIncorrect++
	console.log("numIncorrect: " + numIncorrect);

	$(".rightOrWrong").html("Wrong Answer!");
	$(".correctAnswer").html("The Correct Answer is...");
	$(".choices").hide();
	//HACK //NOT WORKING
	if($(".choices").attr("value", answers.q0)){
		$(this).show();
	}else if($(".choices").attr("value", answers.q1)){
		$(this).show();
	}else if($(".choices").attr("value", answers.q2)){
		$(this).show();
	}else if($(".choices").attr("value", answers.q3)){
		$(this).show();
	}else if($(".choices").attr("value", answers.q4)){
		$(this).show();
	}

	questionNum++;
	totalQuestions
	setTimeout(showQuestion(questionNum), 5000);
	//display to html "The Correct Answer is: ..."
	
}
function rightAnswerResult(){ //show for 5 seconds
	numCorrect++;
	console.log("numCorrect: " + numCorrect);
	resetTimer();
	$(".rightOrWrong").html("Correct!");

			questionNum++;
			totalQuestions
	setTimeout(showQuestion, 5000);
	
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
	    	numUnanswered++;
	    	console.log("numUnanswered: " + numUnanswered);
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
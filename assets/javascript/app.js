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

$("button").on("click", showQuestion);
function showQuestion(){ 
  $(".question").html(q1.question);
   
  $(".choice1").html(q1.inAns1).add("button");
  $(".choice2").html(q1.inAns2);
  $(".choice3").html(q1.inAns3);
  $(".choice4").html(q1.answer);
}
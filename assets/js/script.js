$(document).ready(function() {

	wordArray = ["Elephant", "Orange", "Creative", "Developer", "Anxious", "Jazz"];

	$("#generate-button").click(function() {
		$("#random-word").empty();
		randomWord =  wordArray[Math.floor(Math.random() * wordArray.length)];
		$("#random-word").append(randomWord);
	});

	


});
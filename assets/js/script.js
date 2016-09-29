$(document).ready(function() {

	wordArray = ["elephant", "orange", "creative", "developer", "anxious", "jazz", "helicopter", "submarine"];

	$("#generate-button").click(function() {
		$("#random-word").empty();
		randomWord =  wordArray[Math.floor(Math.random() * wordArray.length)];
		console.log(randomWord);
		splitWord = randomWord.split("");
		console.log(splitWord);

		underscoreArray = [];
		for (var i = 0; i < splitWord.length; i++){
			underscoreArray.push("_ ");
		};

		$("#random-word").append(underscoreArray);

	});

	$("#guess-button").click(function() {
		guessedLetter = $("#guessed-letter")[0].value;
		storeGuessedLetters(guessedLetter);

		
		while(splitWord.indexOf(guessedLetter) != -1) {
			searchedLetterIndex = splitWord.indexOf(guessedLetter);
			underscoreArray[searchedLetterIndex] = guessedLetter;
			splitWord[searchedLetterIndex] = "-"
		};

		$("#random-word").html(underscoreArray);
		$("#guessed-letter")[0].value = "";
	});

});

function storeGuessedLetters(guessedLetter) {
	guessedArray = [];
	guessedArray.push(guessedLetter);
	$("#guessed-letters").append(guessedArray);
};
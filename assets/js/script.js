$(document).ready(function() {

	wordArray = ["elephant", "orange", "creative", "developer", "anxious", "jazz", "helicopter", "submarine"];

	$("#generate-button").click(function() {
		$("#random-word").empty();
		randomWord =  wordArray[Math.floor(Math.random() * wordArray.length)];
		console.log(randomWord);
		splitWord = randomWord.split("");

		underscoreArray = [];
		for (var i = 0; i < splitWord.length; i++){
			underscoreArray.push("_ ");
		};

		$("#random-word").append(underscoreArray);
	});

	// $("#guess-button").click(function() {
	// 	guessedLetter = $("#guessed-letter")[0].value;
	// });

});

function guessClickedLetter (letter) {
	while(splitWord.indexOf(letter) != -1) {
		searchedLetterIndex = splitWord.indexOf(letter);
		underscoreArray[searchedLetterIndex] = letter;
		splitWord[searchedLetterIndex] = "-"
	};

	$("#random-word").html(underscoreArray);
	// $("#guessed-letter")[0].value = "";
};

function storeGuessedLetters(guessedLetter) {
	guessedArray = [];
	guessedArray.push(guessedLetter);
	$("#guessed-letters").append(guessedArray);
};
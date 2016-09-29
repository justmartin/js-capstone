$(document).ready(function() {

	wordArray = ["elephant", "orange", "creative", "developer", "anxious", "jazz", "helicopter", "submarine"];
	$("#letters :input").attr("disabled", true); //disables all letters on page load
	guessedArray = []; //defines array to store guessed letters


	$("#generate-button").click(function() {
		$("#random-word").empty(); //clears word display
		$("#hint-text").empty(); //clears hint text
		randomWord =  wordArray[Math.floor(Math.random() * wordArray.length)]; //gets random word from array
		console.log(randomWord);
		splitWord = randomWord.split(""); //splits random word into array

		underscoreArray = []; //defines array to store random word and creates corresponding underscores
		for (var i = 0; i < splitWord.length; i++){
			underscoreArray.push("_ ");
		};

		$("#random-word").html(underscoreArray); //displays blank spaces
		$("#letters :input").attr("disabled", false); //enables letters
	});

	hints = { "elephant": "Large Vegan", 
			  "orange": "Juicy Fruit",
			  "creative": "Imagination",
			  "developer": "NYCDA",
			  "anxious": "Feeling nervous?",
			  "jazz": "Louis Armstrong",
			  "helicopter": "Rotors",
			  "submarine": "Under the Sea" 
			};

	$("#hint-button").click(function() {
		$("#hint-text").html(hints[randomWord]);
	});

});


function guessClickedLetter (letter) {
	while(splitWord.indexOf(letter) != -1) {
		searchedLetterIndex = splitWord.indexOf(letter);
		underscoreArray[searchedLetterIndex] = letter;
		splitWord[searchedLetterIndex] = "-"
	};
	$("#random-word").html(underscoreArray);
};

function storeGuessedLetters(guessedLetter) {
	if (guessedArray.length < 10) {
		guessedArray.push(guessedLetter);
		$("#guessed-letters").html(guessedArray);
	} else {
		alert("You're out of tries!" + "\n" + "Click Generate Word to Play Again!");
		$("#letters :input").attr("disabled", true);
	};
};

function subtractGuesses() {
	currentNumber = $("#guesses-remaining").text()
	newNumber = parseInt(currentNumber) - 1;
	newText = newNumber.toString();
	$("#guesses-remaining").text(newText);
};





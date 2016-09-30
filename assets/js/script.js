$(document).ready(function() {

	wordArray = ["elephant", "orange", "creative", "developer", "anxious", "jazz", "helicopter", "submarine"];
	$("#letters :input, .hint :input").attr("disabled", true); //disables all letters on page load

	$("#generate-button").click(function() {
		//defines array to store guessed letter
		guessedArray = [];
		//functions to clear html elements on new word
		$("#random-word").empty(); 
		$("#hint-text").empty();
		$("#guesses-remaining").text(10);
		$("#guessed-letters").html("");

		randomWord =  wordArray[Math.floor(Math.random() * wordArray.length)]; //gets random word from array
		console.log(randomWord);
		splitWord = randomWord.split(""); //splits random word into array

		underscoreArray = []; //defines array to store random word and creates corresponding underscores + space
		for (var i = 0; i < splitWord.length; i++){
			underscoreArray.push("_ ");
		};

		$("#random-word").html(underscoreArray); //displays blank spaces
		$("#letters :input, .hint :input").attr("disabled", false); //enables letters
	});

	//defines object with keys and values for hints
	hints = { "elephant": "Large Vegan", 
			  "orange": "Juicy Fruit",
			  "creative": "Imagination",
			  "developer": "NYCDA",
			  "anxious": "Feeling nervous?",
			  "jazz": "Louis Armstrong",
			  "helicopter": "Rotors",
			  "submarine": "Under the Sea" 
			};

	//displays corresponding hint based on random word
	$("#hint-button").click(function() {
		$("#hint-text").html(hints[randomWord]);
	});
});

//function called by buttons in keys.js
function guessClickedLetter (letter) {
	//loop that parses random word for matches on passed letter
	while(splitWord.indexOf(letter) != -1) {
		searchedLetterIndex = splitWord.indexOf(letter); //searches the split random word for passed letter
		underscoreArray[searchedLetterIndex] = letter; //sets the location on the blank underscore array to passed letter
		splitWord[searchedLetterIndex] = "-"; //sets the location of the passed letter in split word array to a -
	};

	$("#random-word").html(underscoreArray); //updates the random word displayed

	//checks if there are any underscores left in the underscore array. if not, user wins.
	underscorePresent = underscoreArray.indexOf("_ "); 
	if (underscorePresent == -1) {
		alert("Congrats!!! You Won!!!");
	};
};

//allows the user 10 tries to guess the word
function storeGuessedLetters(guessedLetter) {
	if (guessedArray.length < 10) {
		guessedArray.push(guessedLetter); //stores guessed letter in array
		$("#guessed-letters").html(guessedArray); //displays guessed letters to user
	} else {
		alert("You're out of tries!" + "\n" + "Click Generate Word to Play Again!");
		$("#letters :input").attr("disabled", true); //disables buttons when limit is reached
	};
};

//converts countdown text to a number then subtracts one for each guess and displays it
function subtractGuesses() {
	currentNumber = $("#guesses-remaining").text()
	newNumber = parseInt(currentNumber) - 1;
	newText = newNumber.toString();

	$("#guesses-remaining").text(newText);
};

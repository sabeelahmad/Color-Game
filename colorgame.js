var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	
	}
});


resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new goal color
	pickedColor = pickColor();
	//change color display to picked
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	//reset h1 background
	h1.style.backgroundColor = "steelblue";

	msgDisplay.textContent = "";

	this.textContent = "New Colors";

});


for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {

		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			//Correct
			msgDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			//fade out wrong color
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//Loop all squares
	for(var i = 0; i < squares.length; i++) {
		//Change colors
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Pick a random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numColors) {
	//Make an array
	var arr = []; 
	//Add numColors random Colors to it
	for(var i = 0; i < numColors; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//Return
	return arr;
}

function randomColor() {
	//Pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//Pick a Green
	var green = Math.floor(Math.random() * 256); 
	//Pick a blue
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";

}
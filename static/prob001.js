var mult1 = 3; //Prog will calc sum of multiples of these #'s less than inputted bound
var mult2 = 5;
window.onload = function() {
	document.getElementById("calcButton").onclick = calculate;
	document.getElementById("bound").onkeypress = handleKeyPress;
};
function calculate() {
	var inputText = document.getElementById("bound");
	var bound = inputText.value;
	inputText.value = "";

	var sum = 0;
	for (var i = 1; i < bound; i++) {
		if (i % mult1 == 0 || i % mult2 == 0) {
			sum += i;
		}
	}

	var answer = document.createElement("p");
	answer.innerHTML = "The sum of all the multiples of "+mult1+" or "+mult2+" less than "
				+bound+" is: "+sum;
	document.getElementById("container").appendChild(answer);
}
function handleKeyPress(e) {
	e = e || window.event; //IE <= 9, event obj not passed
	if (e.keyCode === 13) {
		document.getElementById("calcButton").click();
		return false;
	}
}
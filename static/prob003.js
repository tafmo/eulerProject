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

	var rump = bound;
	var inc = 2;
	while (rump > 1) {
		rump % inc == 0 ? rump = rump / inc : inc++;
	}

	var answer = document.createElement("p");
	answer.innerHTML = "The largest prime factor of " + bound + " is " + inc;
	document.getElementById("container").appendChild(answer);
}
function handleKeyPress(e) {
	e = e || window.event; //IE <= 9, event obj not passed
	if (e.keyCode === 13) {
		document.getElementById("calcButton").click();
		return false;
	}
}
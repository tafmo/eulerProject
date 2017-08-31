window.onload = function() {
	document.getElementById("sumButton").onclick = fiboSum;
	document.getElementById("bound").onkeypress = handleKeyPress;
};
function fiboSum() {
	var inputText = document.getElementById("bound");
	var bound = inputText.value;
	inputText.value = "";

	var lastFib = 1;
	var fib = 1;
	var nextFib = 2;
	var sum = 0;
	while (nextFib <= bound) {
		nextFib = fib + lastFib;
		
		if (fib % 2 == 0) {
			sum += fib;
		}

		lastFib = fib;
		fib = nextFib;
	}

	var answer = document.createElement("p");
	answer.innerHTML = "The sum of the even Fibonacci numbers less than or equal to " + bound +" is: " + sum;
	document.getElementById("container").appendChild(answer);
	//alert("The sum of the even Fibonacci numbers less or equal to " + bound +" is: " + sum);
}

function handleKeyPress(e) {
	e = e || window.event; //IE <= 9, event obj not passed
	if (e.keyCode === 13) {
		document.getElementById("sumButton").click();
		return false;
	}
}

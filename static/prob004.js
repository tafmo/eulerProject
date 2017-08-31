window.onload = function() {
	document.getElementById("calcButton").onclick = calculate;
	document.getElementById("digits").onkeypress = handleKeyPress;
};
function calculate() {
	var inputText = document.getElementById("digits");
	var digits = Math.floor(inputText.value);
	inputText.value = "";

	if (digits < 1) {
		alert("Digits must be an integer greater than zero!");
		return false;
	}

	var palindrome = largestPalindrome(digits);

	if (palindrome != 0) {
		var answer = document.createElement("p");
		answer.innerHTML = "The largest palindrome made from the product of two " + digits + "-digit numbers is: " + palindrome;
		document.getElementById("container").appendChild(answer);
	} else {
		alert("Answer not found!");
	}
}
function largestPalindrome(digits) {
	var largest = Math.pow(10, digits) - 1;
	var end = Math.pow(10, digits - 1);
	var palindrome = 0;
	for (var begin = largest; begin >= end; begin--) {
		for (var i = largest; i >= begin; i--) {
			prod = begin*i;
			if (isPalindrome(prod) && prod > palindrome) {
				palindrome = prod;
			}
		}
	}
	return palindrome;
}
function isPalindrome (str) {
	str = str + "";
	return str == str.split("").reverse().join("");
}
function handleKeyPress(e) {
	e = e || window.event; //IE <= 9, event obj not passed
	if (e.keyCode === 13) {
		document.getElementById("calcButton").click();
		return false;
	}
}
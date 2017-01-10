var num1 = 3;
var num2 = 5;

function compare(a, b) {
	return a > b ? "bigger":"less";
}
var result = compare(num1, num2); // "less"
var a = num1 + " is " + result + " than " + num2
console.log(a) ;


function add(a, b) {
	var result = a + b;
	return result;
}

var sum = add(1, 2);
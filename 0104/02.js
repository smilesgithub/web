function f1() {
	console.log("this is f1");
	function f2() {
		console.log("this is f2");
	}
	f2();
}

f1();// this is f1 换行 this is f2

function compare(a, b) {
	// a = 5, b = 3
	function result(left, right) {
		// left = 5, right = 3
		var r = left > right ? "bigger":"not less"; // bigger
		return r;
	}
 	var res = result(a, b); //  "bigger"
 	var string = a + " is " + res + " than " + b;// 5 is bigger than 3
 	return string;
}
var res = compare(5,3);// 5 is bigger than 3
console.log(res);

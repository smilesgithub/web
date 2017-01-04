function f1() {
	console.log("this is f1");
	function f2() {
		console.log("this is f2");
	}
	f2();
}


function compare(a,b) {
	function result(left,right) {
		var result = left > right ? "bigger":"not less";
		return result;
	}
 	var result = result(a,b)
 	var string = a + "is" +result + "than" + b;
 	result string;
}
console.log(compare(5,3));

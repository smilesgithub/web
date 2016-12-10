function up(key) {
	if (key=="a") {
		return "A";
	}
	else if (key=="b") {
		return "B";
	}
	else if (key=="c") {
		return "C";
	}
	else  {
		return "others";
	}
}
var d = up("a");
console.log(d);
console.log(up("a"));
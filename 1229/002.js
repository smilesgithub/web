var fun = function (score) {
	if (score<=59) {
		console.log("fail");
	} else if (score>=60 && score<=89) {
		console.log("pass");
	} else {
		console.log("do well");
	}
}
fun(100);
fun(59);
fun(70);
fun(90);
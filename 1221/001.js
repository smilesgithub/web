var function_1=function(callback) {
	console.log("do something.");
	(callback &&  typeof(callback) === "function") && callback();
}
var function_2=function() {
	console.log("function_2 is running.")
};
function_1(function_2);


var function_1=function(callback) {
	var num = 0 ;
	console.log(num ++);
	(callback && typeof(callback) === "function") && callback(num);
}
function_1(function(num){console.log(num)});
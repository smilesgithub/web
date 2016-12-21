var function_1=function(callback) {
	var word_1="do something.";
	var word_2="do another thing.";
	console.log(word_1);
	(callback && typeof(callback)==="function") && callback (word_2);
}
var function_2=function(word){console.log(word)};
function_1(function_2);
var function_1=function(callback){
	this.word_1="do something.";
	this.word_2="do another thing.";
	console.log(this.word_1);
	(callback && typeof(callback) === "function") &&　callback;
}
var function_2=function(){console.log(this.word_2)};
function_1(function_2);

var word_2="do another thing.";
var function_1=function(callback){
	this.word_1="do something.";
	console.log(this.word_1);
	(callback && typeof(callback) ==="function") && callback();
}
var function_2=function(){console.log(this.word_2)};
function_1(function_2);
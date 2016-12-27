var un = undefined;
var nu = null;
var bo = true;
var num = 123;
var str = "";

var obj = {name:"xu", age:38, man:true};

var array = ["chinese", "math", "english"];

var fun = function(val) {
	console.log(val);
};
fun(obj.age);


function funName(a, b) {
	return a + b;
}
funName(1, 2);


var funName = function(){

}

var sqrt = function(a,b) {
	return a*a + b*b
}
sqrt(1,3);
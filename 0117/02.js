var o1 = {
	age:10
};
var o2 = o1;
o2.age = 5;
console.log(o1.age);


function account(arg){
	this.id = arg;
	this.left = 0;
}

var a1 = new account("xu");
a1.left = 100;

var a2 = new account("li");
console.log(a2.left); 


function student(name){
	this.name = name;
}


var s1 = new student("xu");
var s2 = new student("li");
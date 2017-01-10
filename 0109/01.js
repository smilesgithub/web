// var obj = {
// 	attr1: 1,
// }
// obj.attr2 = 2;
// console.log(obj);


var Robot = function(name) {                //声明一个构造函数
	this.name = name;
	this.say = function() {
		console.log(this.name)
	}
};

Robot.prototype = {name: "terst", age:12, gender:"boy"}    //设置构造函数Robot的原型对象（属性值可以为函数）
Robot.prototype.sayAge = function() {
	console.log(this.age);
}

var robot = new Robot("bower")             //实例化一个对象
robot.say()
console.log(robot);
console.log(robot.age);
console.log(robot.name);
console.log(robot.sex);

robot.sayAge();

// prototype 给 构造函数创建的对象 添加属性和方法
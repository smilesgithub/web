function fn() {
	console.log(this);
}
fn();


var robot={
	name:"cup",
	say:function(){
		console.log(this.name)
	}
};
robot.say();


function Robot(name){
	this.name=name;
	this.say=function(){
		console.log(this.name)
	}
}
var robot_1=new Robot('bower');
robot_1.say()
var robot_2=new Robot('cup');
robot_2.say()


var robot_1={name:'cup'}
var robot_2={name:'bower'}

function say() {
	console.log(this.name)
}
say.call(robot_1)
say.call(robot_2)


function Robot(name){
	this.name=name;
	this.say=function(){
		console.log(this.name)
	}
}
var robot=new Robot('bower');
function say () {
	console.log(this.name)
}
say.call(robot)
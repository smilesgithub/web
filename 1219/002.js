// var robot= {
// 	name:"cup",
// 	say:function() {
// 		console.log("Hi,i am"+ this.name+ ".");
// 	}
// }
// robot.say()


var robot={
	name:"cup",
	say:function(){
		console.log("Hi,i'm + this.name"+".");}
}
var fn=robot.say;

var robot_1={
	name:"bower",
	say:function(){
		console.log(this.name);
	}
}
var robot_2={
	name:"cup"
}
robot_2.say=robot_1.say
robot_2.say()
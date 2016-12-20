// var Robot = function (name) {
// 	this.name = name ;
// 	this.say = function () {
// 		console.log (this.name)
// 	}
// };
// Robot.prototype = {
// 	age :12 ,gender :"boy"
// }
// var robot = new Robot("bower")


var Robot = function (name) {
	this.name = name;
};
Robot.prototype = {
	age : 12 ,sex :"boy";
};
var robot = new Robot ("cup");
Robot.prototype.age = 13;
robot._proto_
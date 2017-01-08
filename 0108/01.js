function Robot(name) {
	this.name=name;
	this.say=function(){
		console.log(this.name)
	}
}
var robot = new Robot('bower');
function say(){
	console.log(this.name)
}
say.call(robot)
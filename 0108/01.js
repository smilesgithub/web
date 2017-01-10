function Robot(name) {
	// name = "bower"
	this.name = name; // "bower"
	this.say = function(){ console.log(this.name); }
}

var robot1 = new Robot('bower');
robot1.say();

var robot2 = new Robot('power');
robot2.say();

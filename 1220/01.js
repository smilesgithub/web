Array.prototype 


function Robot (name) {
	this.name = name ;
	this.say = function () {
		console.log (this.name)
	}
};
Robot.prototype = {age:12,gander:"boy"}
Robot.prototype     // object{age:12,gander:"boy" }
 

function Car (x,y) {
	this.x = x;
	this.y = y;
}

car.prototype.run = function (x_increase,y_increase) {
	this.x += x_increase;
	this.y += y_increase;
}
car.prototype.show = function () {
	console.log("(" + this.x + "," +this.y +")");
}
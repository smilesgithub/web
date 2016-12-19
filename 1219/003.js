function Car (x,y) {
	this.x=x;
	this.y=y;
	this.run=function(x_increase,y_increase) {
		this.x + = x_increase;
		this.y + = y_increase;
	}
	this.show = function () {
		console.log ("(" + thi.x + "," +this.y+")");
	}
}
var car={
	name:"bmw",
	color:"white",
	speed:100,
	run:function() {
		console.log("run");
	},
	stop:function() {
		console.log("stop");
	}
};
console.log(car.name);
car.run();
function Robot(name){
	this.name=name;
	this.say=function(){
		console.log(this.name)
	}
};
Robot.prototype={age:12,gender:"boy"}
Robot.prototype


var Robot=function(name) {                //声明一个构造函数
	this.name=name;
	this.say=function() {
		console.log(this.name)
	}
};
Robot.prototype={age:12,gender:"boy"}    //设置构造函数Robot的原型对象（属性值可以为函数）
var robot=new Robot("bower")             //实例化一个对象
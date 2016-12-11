function sum(a) {
	if (a<10) {
		console.log("一位数");	
	}
	else if (a>=10&&a<100) {
		console.log("两位数");
	}
 	else {
 		console.log("其他");
 	}
}
sum(150);


function china(str) {
	if (str=="台湾人"||str=="大陆人") {
		console.log("中国人");
	}
	else {
		console.log("外国人");
	}
}
china("法国人");

/*
a && b, a b 都为true ，表达式的值才为true，只要有一个为false,表达式的值就为false;
a || b, a b 都为false，表达式的值才为false，只要有一个为true,表达式的值就为true;
*/

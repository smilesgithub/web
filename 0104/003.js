function getArraySum(a) {
	var h=0;
	for(var i=0;i<array.length;i++) {
		h = h + a[0]
	}
	return h;
}

var array=[0,1,2,3];


function add(a,b) {
	var temp = a + b;
	return temp;
}

var c = add(1, 2);


function sqrt(a) {
	var q = a*a;
	return q;
}

function print(arr) {
	// for(var i = 0; i < arr.length; i++) {
	// 	if (i % 2 == 0){
	// 		console.log(arr[i]);
	// 	}
	// }
	for(var i = 0; i < arr.length; i = i + 2) {
		console.log(arr[i]);
	}
}
print(array);

var sub = function(a, b) {
	return a - b;
};

var mult;
mult = function(a, b) {
	return a * b;
};

var m = mult(17, 19);
console.log(m);

var div = function(m,n) {
	if (n==0) {
		console.log("0不能做除数"); 
	} else {
		return m/n;
	}	
};

var div2 = function(m,n) {
	if (n==0) {
		console.log("0不能做除数"); 
		return
	} 

	return m/n;	
};

var div3 = function(m,n) {
	return n == 0 ? undefine : m/n;
};

/*
function fun() {
	if () {

	} else {
		// TODO
	}

	if () {
		return
	}
	// TODO

	return () ? () : ();
}
*/
function add(a, b) {
	return a + b;
}

add(1, 2);


function mother(args) {
	args();
}

var cb = function(){
	console.log("cb");
}

mother(cb);

mother(function callback(){console.log("callback");})
var a=1;
var b=2;
var c=4;
if (a+b>c) {
	console.log(a+b);
}
else {
	console.log(c);
}

var d;
if (d) {
	console.log(d, true);
}
else{
	console.log(d, false);
}

var e=null;
if (e) {
	console.log(e, true);
}
else{
	console.log(e, false);
}

var f=0;
if (f){
	console.log(f,true);
}
else {
	console.log(f,false);
}

var g="";

if (g){
	console.log(g,true);
}
else {
	console.log(g,false);
}

var h={};
if (h){
	console.log(h,true);
}
else {
	console.log(h,false);
}


var j=[];
if (j){
	console.log(j,true);
}
else {
	console.log(j,false);
}

//undefined null 0 ""作为条件时为false
var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
var week = date.getDay();
var str = "";
if (week == 0) {
	str = 'Sunday';
}
else if (week == 1) {
	str = 'Monday';
}
else if (week == 2) {
	str = 'Tuesday';
}
else if (week == 3) {
	str = 'Wednsday';
}
else if (week == 4) {
	str = 'Thursday';
}
else if (week == 5) {
	str = 'Friday';
}
else if (week == 6) {
	str = 'Saturday';
}
else {
	str = 'error';
}
console.log(str);
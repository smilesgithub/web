// for (var i=0;i<10;i++) {
// 	console.log(i);
// }

// var i=0;
// while(i<10){
// 	console.log(i);
// 	i++;
// }

// for (var i=0;i<10;i++) {
// 	if (i%2==0) {
// 		console.log(i);
// 	}
// }

// for (var i=10;i<30;i+=2) {
// 	if(i%7==0) {
// 		console.log(i);
// 	}
// }

// for (var i=20;i<100;i++) {
// 	if(i%17==0) {
// 		console.log(i);
// 		break;
// 	}
// }

for (var i=0;i<15;i++) {
	if (i%7==0) {
		if (i%2==0) {
			continue;
		}
		console.log(i);
	}
}
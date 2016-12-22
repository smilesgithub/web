function init () {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlaylist();
}

function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	// if (songName == "") {
	// 	alert("please enter a song");
	// }
	// else {
	// 	alert("Adding" + songName);
	// }
	var li = document.createElement("li");
	li.innerHTML = songName;
	var ul = document.getElementById("list");
	ul.appendChild(li);
	save(songName);
}

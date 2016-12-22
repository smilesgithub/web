function save(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function getStoreArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	} else {
		playlistArray = JSON.parse(playlistArray);
	}
	return playlistArray
}

function loadPlaylist() {
	var playlistArray = getSaveSongs();
	var ul = document.getElementById("list");
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = playlistArray[i];
			ul.appendChild(li);
		}
	}
}

function getSaveSongs() {
	return getStoreArray("playlist");
}
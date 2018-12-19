document.addEventListener("keydown", openMouth, false);
document.addEventListener("keyup", closeMouth, false);

function openMouth() {
	var myMonster = document.getElementById("monster");
	var keyPressed = event.keyCode;
	if (String.fromCharCode(keyPressed) == "O")	 {
		myMonster.style.backgroundPositionX = "-355px";
	}
}

function closeMouth() {
	var myMonster = document.getElementById("monster");
	myMonster.style.backgroundPositionX = "-237px";
	var keyPressed = event.keyCode;
	alert(String.fromCharCode(keyPressed));
}
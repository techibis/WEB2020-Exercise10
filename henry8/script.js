function writeLine() {
	var lyrics = document.getElementById("lyrics");
	lyrics.innerHTML += "I'm Henry the 8th I am.<br/>";
}

var job2 = setInterval(writeLine, 1500);

function myStop() {
	clearInterval(job2);
	alert("Thank goodness, the song stopped!");
}
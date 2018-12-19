function logUserOut() {
	var message = document.getElementById("message");
	message.innerHTML = "You have been logged out";
}

var job1 = setTimeout(logUserOut, 5000);

function myContinue() {
	clearTimeout(job1);
	alert("You may continue to use the website.");
}
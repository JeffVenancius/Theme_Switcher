let on = true
function toggleSwitch(){
	let button__themeSwitch = document.getElementsByClassName("button__themeSwitch")[0]
	let body = document.getElementsByTagName("Body")[0];
	on = !on;
	body.classList.toggle("body__night");
	button__themeSwitch.classList.toggle("button__themeSwitch__off");
}

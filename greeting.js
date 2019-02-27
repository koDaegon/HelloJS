const form = document.querySelector(".js_form") , 
	input = form.querySelector("input");

const  USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS , text);
 }

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	input.innerText = currentUser;
}

function init() {
	loadName();
}

init();
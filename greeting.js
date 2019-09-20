const form = document.querySelector(".js_form") , 
	input = form.querySelector("input"),
	greeting = document.querySelector(".js_greetings"),
	nameTitle = document.querySelector("#name-title");
	headTitle = document.querySelector('#head-title');

const  	USER_LS = "currentUser",
		SHOWING_CN = "showing";

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit" , handleSubmit);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}


function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	const date = new Date();
	const hours = date.getHours();
	var greetingComment;
	if (hours >4 && hours <12) {
		greetingComment = 'Morning';
	} else if (hours >= 12 && hours <18) {
		greetingComment = "Afternoon";
	} else {
		greetingComment = "Night";
	}
	greeting.innerText = `Good ${greetingComment} ${text} :)`;
	nameTitle.innerHTML = `${text}'s Todo List`;
	headTitle.innerText = `Welcome ${text}`;
	
}

function saveName(text){
	if(text !=''){
		localStorage.setItem(USER_LS , text);
	}
 }

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
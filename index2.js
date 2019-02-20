const title = document.querySelector("#title");
const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

var count  = 0;
function handle () {
	if (count >1){
		title.style.color = "blue";
		count  = count - 1;
	}
	else{
		title.style.color = "red";
		count  = count +1;
	}
}

function handleResize(event) {
	console.log(event);
}
function handleClick() {
	const currentColor = title.style.color;
	console.log(currentColor);
	if(currentColor === BASE_COLOR){
		title.style.color = OTHER_COLOR;
	} else {
		title.style.color = BASE_COLOR;
	}
}


function init() {
	
	title.style.color = BASE_COLOR;
	title.addEventListener("dblclick" , handleClick);
}

function handleOffline() {
	console.log("A");
}

function handleOnline() {
	console.log("welcom back");
}


//window.addEventListener("online" , handleOnline);

	
init();


//window.addEventListener("resize" , handleResize);

//	title.addEventListener("click" , handle);

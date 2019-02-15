const title = document.querySelector("#title");
let count  = 0;
function handle () {
	if (count >1){
		title.style.color = "blue";
		title.innerHTML = "clicked";
		count  = count - 1;
	}
	else{
		title.style.color = "red";
		count  = count +1;
	}
}
function toggle() {
	title.style.color = "black";
	title.innerHTML = "toggle";
	count  =  4;
}

function handleResize(event) {
	console.log(event);
}

window.addEventListener("resize" , handleResize);

	title.addEventListener("click" , handle);

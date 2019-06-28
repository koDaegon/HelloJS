const clockContatiner  = document.querySelector(".js_clock"),
	clockTitle = clockContatiner.querySelector("#current_time"),
	dateTitle = clockContatiner.querySelector("#current_date"),
	yearTitle = clockContatiner.querySelector('#current_year');
	


function getTime () {
	const date  = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const min  = date.getMinutes();
	const hours = date.getHours();
	const sec = date.getSeconds();
	
	var time = `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
		
	clockTitle.innerText= time;
	

}
function getDate() {
	const date  = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	var current_date = `${day} / ${month+1}`;
	var current_year = `${year}`;

	dateTitle.innerText = current_date;
	yearTitle.innerText = current_year;
}

function init() {
	getTime();
	getDate();
	setInterval(getTime , 1000);
}

init();
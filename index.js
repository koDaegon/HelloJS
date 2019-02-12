const sth  = "something"
const daysOfWeek = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"];
const dkimInfo = {
			firstname : "Daegon",
			lastname  : "Kim",
			gender : "Male",
			FavMovie : ["Train to Busan" , "A Star is born" , "Along with the god"],
			FavFoods : [ { 
					name : "Ramyun" ,
					EasytoGet : true
					},
				     {
					name : "sushi",
					EasytoGet : false 
				     }]
				};




dkimInfo.position = "Intern";
console.log(dkimInfo);

function sayHello (name , service) {
	

	return (`Hi ${name} we are ${service}`);


	}

const Intro = sayHello(dkimInfo.firstname , "Cultural Vistas");
alert(Intro);

const calculator = {
	plus : function(a,b) {
		return a+b;
	},
	minus : function(a,b){
		return a-b;
	},
	multiply : function(a,b){
		return a*b;
	},
	divide : function(a,b) {
		return a/b;
	}
}
function myfunction(){
		document.getElementById("myText") = result;
}
const result = calculator.divide(10,5)

console.log(result);

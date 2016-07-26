
var add = document.getElementById("add");
var rem = document.getElementById("remove");
var clear = document.getElementById("clear");

var item = document.getElementById("get-todo");



add.addEventListener("click", function() {
	// body...
	var parag = document.createElement("P");

	var itemVal = document.createTextNode(item.value);
	parag.appendChild(itemVal);

	document.querySelector(".input").appendChild(parag);
})


rem.addEventListener("click", function(argument) {
	// body...
	var lst = document.querySelector(".input");
	lst.removeChild(lst.childNodes[1]);
})


clear.addEventListener("click", function(argument) {
	// body...
	document.querySelector(".input").innerHTML = "";
})

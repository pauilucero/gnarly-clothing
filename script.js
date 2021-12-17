
window.alert("Welcome to Gnarly! G!");

//Open Photo Viewer
function openModal(e){
	var box= document.getElementById("modal-box");
	var content = document.getElementById("modal-content");

	content.innerHTML += "<img src='"+e+"'>";
	box.style.display = "block";
}
//Close Photo Viewer
function closeModal(){
	var mb = document.getElementById("modal-box");
	mb.style.display= "none";
}
//Mobile View with Burger Menu
function toggleMenu(){
	 var menu = document.getElementById("navigation");
	 menu.classList.toggle("change");

	 var modal = document.getElementById("modal");
	 if(modal.style.display == "block"){
	 	modal.style.display = "none";
	 }
	 else{
	 	modal.style.display = "block";
	 }
}

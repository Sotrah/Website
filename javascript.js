function FunctionOne() {
	var x = document.getElementById("demo");
		x.style.fontSize = "100px";
		x.style.color = "gold";}
		
function FunctionTwo(){
	var y = document.getElementById("testmus");
		y.style.fontSize = "30px";
		y.style.color = "blue";}
		
function FunctionThree(){
	var y = document.getElementById("testmus");
		y.style.fontSize = "15px";
		y.style.color = "#0d0d0d";}
		
function changeImage() {
    var image = document.getElementById('myImage');
		if (image.src.match("bilder/HvitBil")) {
			image.src = "bilder/RødBil.jpg";}
		else {

			image.src = "bilder/HvitBil.jpg";}}
		
function operasjonValg(){
	var valg = document.getElementById("valg").value;
	
	if(valg == "adisjon"){
		adisjon();
	}else if(valg == "subtraksjon"){
		subtraksjon();
	}else if(valg == "multiplikasjon"){
		multiplikasjon();
	}else if (valg == "divisjon"){
		divisjon();
	}
}
		
function adisjon(){
	var x = document.getElementById("tall1").value;
	var y = document.getElementById("tall2").value;
	var z = Number(x) + Number (y);
		document.getElementById("svar1").innerHTML = z;}
		
		
function subtraksjon(){
	var x = document.getElementById("tall1").value;
	var y = document.getElementById("tall2").value;
	var z = Number(x) - Number (y);
		document.getElementById("svar1").innerHTML = z;}

function multiplikasjon(){
	var x = document.getElementById("tall1").value;
	var y = document.getElementById("tall2").value;
	var z = Number(x) * Number (y);
		document.getElementById("svar1").innerHTML = z;}

function divisjon(){
	var x = document.getElementById("tall1").value;
	var y = document.getElementById("tall2").value;
	var z = Number (x) / Number (y);
		document.getElementById("svar1").innerHTML = z;}
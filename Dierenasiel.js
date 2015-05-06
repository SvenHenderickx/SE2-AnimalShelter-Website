function codeAddress() {
	var hond = localStorage.getItem('hond');
	var kat = localStorage.getItem('kat');
    
	if(hond == null && kat == null){
		
	}
	else{
		alert(hond + ' ' + kat);
	}
}

window.onload = codeAddress;

function validateForm() {
    var x = document.forms["myForm"]["naam"].value;
	var y = document.forms["myForm"]["leeftijd"].value;
	var r = document.forms["myForm"]["regnummer"].value;
	var i = r.indexOf("0");
    if (x == null || x == "" || y < 0 || i > 0) {
        alert("Naam is verplicht, leeftijd moet 0 of hoger zijn en registratienummer moet met een 0 beginnen!");
        return false;
    }
	else{
		var soort;
		if(document.getElementById("diersoorthond").checked == true){
			soort = 'hond';
		}
		else if(document.getElementById("diersoorthond").checked == false){
			soort = 'kat';
		}
		var animal = {
  		'species':  soort,
  		'name':     $('#naam').val(),
  		'age':      $('#leeftijd').val(),
  		'regnr':    $('#regnummer').val(),
  		'reserved': false
		};
		if(soort == 'hond'){
			var hond = JSON.stringify(animal);
			localStorage.setItem('hond',hond);
		}
		else if(soort == 'kat'){
			var kat = JSON.stringify(animal);
			localStorage.setItem('kat',kat);
		}
	}
}
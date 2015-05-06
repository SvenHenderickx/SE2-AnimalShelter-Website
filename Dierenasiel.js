function codeAddress() {
	var hond = localStorage.getItem('hond');
	var kat = localStorage.getItem('kat');
    alert(hond + ' ' + kat);
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
		
		var animal = {
  		'species':  $('#diersoort').val(),
  		'name':     $('#naam').val(),
  		'age':      $('#leeftijd').val(),
  		'regnr':    $('#regnummer').val(),
  		'reserved': false
		};
		if($('#diersoort').val() == 'Hond'){
			var hond = JSON.stringify(animal);
			localStorage.setItem('hond',hond);
		}
		else{
			var kat = JSON.stringify(animal);
			localStorage.setItem('kat',kat);
		}
	}
}
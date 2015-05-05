function OnReady() {
  console.log('Pagina geladen, DOM klaar voor gebruik.');
}
$(document).ready(OnReady);

function validateForm() {
    var x = document.forms["myForm"]["naam"].value;
	var y = document.forms["myForm"]["leeftijd"].value;
	var r = document.forms["myForm"]["regnummer"].value;
	var i = r.indexOf("0");
    if (x == null || x == "" || y < 0 || i > 0) {
        alert("Naam is verplicht, leeftijd moet 0 of hoger zijn en registratienummer moet met een 0 beginnen!");
        return false;
    }
}
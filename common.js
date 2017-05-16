function dollars (){
	var dollars = prompt('Enter USD value');
	// var euro = prompt('Enter EUR value');
	var dollarsToGrn = dollars * 26.5;
	// var euroToGrn = euro * 29.04;
	// var euroToDol = prompt('EUR to USD');
	// var dollarsToEuro = euroToDol * 1.104;
	alert(`${dollars} USD are equal ${dollarsToGrn} UAH`);
}

function euros (){
	var euro = prompt('Enter EUR value');
	var euroToGrn = euro * 29.4;
	alert(`${euro} EUR are equal ${euroToGrn} UAH`);
}

function eurodoll (){
	var euroToDol = prompt('EUR to USD');
	var dollarsToEuro = euroToDol * 1.104;
	alert(`${euroToDol} EUR are equal ${dollarsToEuro} USD`);
}


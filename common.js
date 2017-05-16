document.querySelector('.usd').addEventListener("click", dollars);
document.querySelector('.eur').addEventListener("click", euros);
document.querySelector('.eurdoll').addEventListener("click", eurodoll);

function dollars (){
	var dollars = prompt('Enter USD value');
	var dollarsToGrn = dollars * 26.5;
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


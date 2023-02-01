var form = document.getElementById('kalkulator');
var costElement = document.getElementById('koszt');
var dni = document.getElementById('dni');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // zablokuj domyślne przeładowanie strony

  var Graficzne = document.getElementById('Graficzne').value;
  var Zarządcze = document.getElementById('Zarządcze').value;
  var Programistyczne = document.getElementById('Programistyczne').value;
  // Integer.parseInt(Graficzne);
  // Integer.parseInt(Zarządcze);
  // Integer.parseInt(Programistyczne);
  const godziny = Programistyczne*1 + Graficzne*1 + Zarządcze*1;
  dni.textContent = godziny/8;
  console.log(dni);
  console.log(godziny);
  // var hours = document.getElementById('czas').value;
  var cost;
  console.log(Graficzne);
  console.log(Zarządcze);
  console.log(Programistyczne);
  costElement.textContent = Graficzne * 50 + Zarządcze * 75 + Programistyczne * 100 + ' zł';

});

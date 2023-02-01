form.addEventListener('submit', function(event) {
    event.preventDefault();
    var services = document.getElementById('usluga');
    var hours = document.getElementById('czas').value;
    var cost = 0;
  
    for (var i = 0; i < services.options.length; i++) {
      if (services.options[i].selected) {
        if (services.options[i].value === 'Graficzne') {
          cost += hours * 50;
        } else if (services.options[i].value === 'Zarządcze') {
          cost += hours * 75;
        } else if (services.options[i].value === 'Programistyczne') {
          cost += hours * 100;
        }
      }
    }
    costElement.textContent = cost + ' zł';
});
  
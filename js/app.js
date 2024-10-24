document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form
    
    // Richiesta nome e cognome
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    // Richiesta chilometri
    const km = document.getElementById("km").value;
    // Richiesta Età
    const age = document.getElementById("eta").value;
    // Calcolo costo base biglietto 0,21$ a chilometro
    let initialPrice = km * 0.21;
    let finalPrice = '';

    // Scelta dello sconto
    if (age === "minorenne") {
        let discount = (initialPrice * 20) / 100;
        finalPrice = initialPrice - discount;
    } else if (age === "oversessanta") {
        let discount = (initialPrice * 40) / 100;
        finalPrice = initialPrice - discount;
    } else {
        finalPrice = initialPrice;
    }

    // Output prezzo finale
    document.getElementById('buyer-name').textContent = name;
    document.getElementById('buyer-surname').textContent = surname;
    document.getElementById('buyer-km').textContent = km + ' km';
    document.getElementById('buyer-age').textContent = age === "minorenne" ? "Minorenne" : age === "oversessanta" ? "Over 65" : "Adulto";
    document.getElementById('price').textContent = finalPrice.toFixed(2) + '€';

    // Mostra la tabella se ci sono dati
    document.getElementById('resultTable').style.display = 'table';
    document.getElementById('ticketTitle').style.display = 'h4';
});

document.getElementById('cancel').addEventListener('click', function (event) {
    event.preventDefault();
    // Reset del modulo e svuotamento output
    document.getElementById("myForm").reset();
    document.getElementById('buyer-name').textContent = '';
    document.getElementById('buyer-surname').textContent = '';
    document.getElementById('buyer-km').textContent = '';
    document.getElementById('buyer-age').textContent = '';
    document.getElementById('price').textContent = '';

    // Nascondi la tabella
    document.getElementById('resultTable').style.display = 'none';
});


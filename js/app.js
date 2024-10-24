// Aggiungi un event listener al modulo con ID "myForm" per l'evento "submit"
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito del modulo (invio della pagina)
 
  // Richiesta nome e cognome
  const name = document.getElementById("name").value; // Recupera il valore dell'input per il nome
  const surname = document.getElementById("surname").value; // Recupera il valore dell'input per il cognome

  // Richiesta chilometri
  const km = document.getElementById("km").value; // Recupera il valore dell'input per i chilometri

  // Richiesta età
  const age = document.getElementById("eta").value; // Recupera il valore dell'input per l'età

  // Calcolo costo base del biglietto: 0,21€ a chilometro
  let initialPrice = km * 0.21; // Calcola il prezzo iniziale moltiplicando i chilometri per il costo al km
  let finalPrice = ''; // Inizializza il prezzo finale come stringa

  // Scelta dello sconto in base all'età
  if (age === "minorenne") {
      let discount = (initialPrice * 20) / 100; // Calcola il 20% di sconto per i minorenni
      finalPrice = initialPrice - discount; // Applica lo sconto al prezzo iniziale
  } else if (age === "oversessanta") {
      let discount = (initialPrice * 40) / 100; // Calcola il 40% di sconto per gli over 65
      finalPrice = initialPrice - discount; // Applica lo sconto al prezzo iniziale
  } else {
      finalPrice = initialPrice; // Se non ci sono sconti, il prezzo finale è uguale a quello iniziale
  }

  // Output del prezzo finale
  document.getElementById('buyer-name').textContent = name; // Visualizza il nome dell'acquirente
  document.getElementById('buyer-surname').textContent = surname; // Visualizza il cognome dell'acquirente
  document.getElementById('buyer-km').textContent = km + ' km'; // Visualizza i chilometri percorsi
  document.getElementById('buyer-age').textContent = 
      age === "minorenne" ? "Minorenne" : 
      age === "oversessanta" ? "Over 65" : "Adulto"; // Visualizza la categoria di età
  document.getElementById('price').textContent = finalPrice.toFixed(2) + '€'; // Visualizza il prezzo finale formattato a 2 decimali

  // Mostra la tabella dei risultati se ci sono dati
  document.getElementById('resultTable').style.display = 'table'; // Cambia lo stile di visualizzazione a tabella
  document.getElementById('ticketTitle').style.display = 'h4'; // Visualizza il titolo del biglietto
});

// Aggiungi un event listener al pulsante "cancel" per l'evento "click"
document.getElementById('cancel').addEventListener('click', function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito del pulsante

  // Reset del modulo e svuotamento dell'output
  document.getElementById("myForm").reset(); // Ripristina gli input del modulo
  document.getElementById('buyer-name').textContent = ''; // Pulisce il campo del nome
  document.getElementById('buyer-surname').textContent = ''; // Pulisce il campo del cognome
  document.getElementById('buyer-km').textContent = ''; // Pulisce il campo dei chilometri
  document.getElementById('buyer-age').textContent = ''; // Pulisce il campo dell'età
  document.getElementById('price').textContent = ''; // Pulisce il campo del prezzo

  // Nascondi la tabella dei risultati
  document.getElementById('resultTable').style.display = 'none'; // Cambia lo stile di visualizzazione a nessuno
});



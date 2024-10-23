document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito del form
  //Richiesta nome e cognome
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  //Richiesta chilometri
  const km = document.getElementById("km").value;
  //Richiesta Eta'
  const age = document.getElementById("eta").value;
  //Calcolo costo base biglietto 0,21$ a chilometro
  let bigliettoBase = km * 0.21;

  // stampa nome
  document.write(
    "<p>Ecco il tuo biglietto, </p> " + name + " " + surname + "!"
  );
  //Scelta dello sconto
  //minorenni sconto 20%
  //Pui di 65 anni sconto del 40%
  if (age === "minorenne") {
    let sconto = (bigliettoBase * 20) / 100;
    let prezzoScontato = bigliettoBase - sconto;
    document.write(
      "<p>Il costo del tuo biglietto e':</p> " + prezzoScontato.toFixed(2) + "€"
    );
  } else if (age === "oversessanta") {
    let sconto = (bigliettoBase * 40) / 100;
    let prezzoScontato = bigliettoBase - sconto;
    document.write(
      "<p>Il costo del tuo biglietto e':</p> " + prezzoScontato.toFixed(2) + "€"
    );
  } else {
    document.write(
      "<p>Il costo del tuo biglietto e':</p> " + bigliettoBase + "€"
    );
  }
  //Output prezzo finale
});

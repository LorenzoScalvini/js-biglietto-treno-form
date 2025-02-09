document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const km = parseFloat(document.getElementById('km').value);
  const age = document.getElementById('eta').value;

  let finalPrice = km * 0.21;
  if (age === 'minorenne') finalPrice *= 0.8;
  if (age === 'oversessanta') finalPrice *= 0.6;

  document.getElementById('buyer-name').textContent = name;
  document.getElementById('buyer-surname').textContent = surname;
  document.getElementById('buyer-km').textContent = km + ' km';
  document.getElementById('buyer-age').textContent =
    age === 'minorenne'
      ? 'Minorenne'
      : age === 'oversessanta'
      ? 'Over 65'
      : 'Adulto';
  document.getElementById('price').textContent = finalPrice.toFixed(2) + '€';

  document.getElementById('output').style.display = 'block';
});

document.getElementById('cancel').addEventListener('click', function () {
  document.getElementById('myForm').reset();
  document.getElementById('output').style.display = 'none';
});

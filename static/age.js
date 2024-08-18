// Milliseconds in a year
const oneYear = 1000 * 60 * 60 * 24 * 365;

// Birthdate to present date
const birthDate = new Date("May 7, 2002").getTime();

function getLifeSpan() {
  const presentDate = Date.now();
  const lifeSpan = ((presentDate - birthDate) / oneYear).toFixed(9);
  document.getElementById('age').innerHTML = lifeSpan;
}

setInterval(getLifeSpan, 1);

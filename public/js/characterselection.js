const chooseMage = document.querySelector('.mage');
const chooseWarrior = document.querySelector('.warrior');
const chooseRouge = document.querySelector('.rogue');
let chosenChar;

async function chooseCharacter() {
  if (chooseMage === true) {
    reqUrl = 1;
  }
  if (chooseWarrior === true) {
    reqUrl = 2;
  }
  if (chooseRouge === true) {
    reqUrl = 3;
  }

  await fetch(`/api/characters/${reqUrl}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      chosenChar = JSON.parse(data);
    });
    console.log(chosenChar);
}

chooseMage.addEventListener('click', chooseCharacter());
chooseWarrior.addEventListener('click', chooseCharacter());
chooseRouge.addEventListener('click', chooseCharacter());


module.exports = characterselection.js;


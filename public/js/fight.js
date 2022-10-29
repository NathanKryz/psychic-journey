const chooseMage = document.querySelector('.mage')
const chooseWarrior = document.querySelector('.warrior')
const chooseRouge = document.querySelector('.rogue')
function chooseCharacter() {
  if (chooseMage === true) {
    reqUrl = 1
  } else if (chooseWarrior === true) {
    reqUrl = 2
  } else {
    reqUrl = 3
  }

  fetch(`/api/characters/${reqUrl}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
  })
}



const chooseMage = document.querySelector('.mage');
const chooseWarrior = document.querySelector('.warrior');
const chooseRogue = document.querySelector('.rogue');



// function to choose character and pushing chosen charater into local storage 
let chosenChar;
let reqUrl;
console.log(chooseMage);
async function chooseCharacter(event, choice) {
  event.preventDefault();
  console.log("Click");
  reqUrl = choice;

  await fetch(`/api/characters/${reqUrl}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Render handlebar function
      localStorage.setItem("character", JSON.stringify(data));
      document.location.replace('/game');
    });
};


chooseMage.addEventListener('click', function(){chooseCharacter (event, 1)});
chooseWarrior.addEventListener('click', function(){chooseCharacter (event, 2)});
chooseRogue.addEventListener('click', function(){chooseCharacter (event, 3)});

// Export stuff to be fixed later
// const _chosenChar = data;
// export { _chosenChar as chosenChar }; 

// function rendergame(){

//Code goes here .render stuff

// }

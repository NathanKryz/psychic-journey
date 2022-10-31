let chosenCharacter = JSON.parse(localStorage.getItem('character'));
console.log(chosenCharacter);
let chosenMonster = JSON.parse(localStorage.getItem('monster'));
console.log(chosenMonster)
let chosenName = JSON.parse(localStorage.getItem('newName'));

const nameDisplay = document.getElementById('charname');
const classthisDisplay = document.getElementById('classDisplay');
const hitpDisplay = document.getElementById('hpDisplay');
const attaDisplay = document.getElementById('attDisplay');
const defeDisplay = document.getElementById('defDisplay');

const nameDisplayMonster = document.getElementById('charnameMonster');
const classthisDisplayMonster = document.getElementById('classDisplayMonster');
const hitpDisplayMonster = document.getElementById('hpDisplayMonster');
const attaDisplayMonster = document.getElementById('attDisplayMonster');
const defeDisplayMonster = document.getElementById('defDisplayMonster');

let newHPMonster;
let newHPCharacter;

let displayCharacter = function (data) {
   
    let classDisplay = data.class;
    console.log(data.class)
    let hitpointsDisplay = data.hitpoints;
    let attackDisplay = data.attack;
    let defenseDisplay = data.defense;
 
    nameDisplay.textContent = chosenName;
    classthisDisplay.textContent = classDisplay;
    hitpDisplay.textContent = hitpointsDisplay;
    attaDisplay.textContent = attackDisplay;
    defeDisplay.textContent = defenseDisplay;
    newHPCharacter = data.hitpoints;
 };
 displayCharacter(chosenCharacter);



  let displayMonster = function (data) {
   
    let classDisplay = data.class;
    console.log(data.class)
    let hitpointsDisplay = data.hitpoints;
    let attackDisplay = data.attack;
    let defenseDisplay = data.defense;
 
    nameDisplayMonster.textContent = chosenName;
    classthisDisplayMonster.textContent = classDisplay;
    hitpDisplayMonster.textContent = hitpointsDisplay;
    attaDisplayMonster.textContent = attackDisplay;
    defeDisplayMonster.textContent = defenseDisplay;
    newHPCharacter = data.hitpoints;
 };

 displayMonster(chosenMonster);

 

let fightplay = function (character, monster) {

  if (winRound()) {
    newHPMonster = (newHPMonster - (character.attack - monster.defense))
    hitpDisplayMonster.textContent = newHPMonster;
  } else if (loseRound()) {
    newHPCharacter = (newHPCharacter - (monster.attack - character.defense))
    hitpDisplay.textContent = newHPCharacter;
  };
};

function checkContinue(hpchar, hpmons) {
  if (hpchar > 0) {
    startFight(event)
  } else if (hpmons === 0){
    winGame()
  }
}


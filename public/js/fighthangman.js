const guessWord = document.getElementById('guessword-el');
const startButton = document.getElementById('btn-el');
const timerEl = document.getElementById('time-el');
const background = document.querySelector('.full-page');
let chosenCharacter = JSON.parse(localStorage.getItem('character'));
console.log(chosenCharacter);
 let chosenMonster;
// console.log(chosenMonster);

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
let gameWord = "";
let wordBlank = 0;
let win = false;
let timer;
let timerCount;
let choice = 1


let fullWord = [];
let hiddenWord = [];

// let words = chosenMonster.hangmans;

async function chooseMonster(choice) {
  console.log("Monster chosen");
    reqUrl = choice;
    console.log("Monster ID: " + reqUrl);
    await fetch(`/api/monsters/${reqUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        localStorage.setItem("monster", JSON.stringify(data));
      });
  };
  

chooseMonster(1)


let displayCharacter = function (data) {
   
    let classDisplay = data.class;
    console.log(data.class)
    let hitpointsDisplay = data.hitpoints;
    let attackDisplay = data.attack;
    let defenseDisplay = data.defense;
 
    //  nameDisplay.textContent = JSON.parse(localStorage.getItem("newName"));
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
 
    // nameDisplayMonster.textContent = chosenName;
    classthisDisplayMonster.textContent = classDisplay;
    hitpDisplayMonster.textContent = hitpointsDisplay;
    attaDisplayMonster.textContent = attackDisplay;
    defeDisplayMonster.textContent = defenseDisplay;
    newHPMonster = data.hitpoints;
 };

  displayMonster(JSON.parse(localStorage.getItem('monster')));

 function startFight(chosenMonster) {
  console.log("You started a fight");
  // console.log(chosenMonster);
  let words = chosenMonster.hangmans;
 // console.log(words);
  win = false;
  timerCount = 30;
  startButton.disabled = true;
  startGuess(words);
  startTimer();
};

function startGuess(words) {
    randomWord = words[Math.floor(Math.random() * words.length)].word;
    console.log(randomWord)
    fullWord = randomWord.split('');
    wordBlank = fullWord.length;
    console.log(fullWord)
    hiddenWord = [];

    for (let i = 0; i < wordBlank; i++) {
        hiddenWord.push("_");
    }   
    guessWord.textContent = hiddenWord.join(' ');
};

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
            if (win && timerCount > 0) {
                clearInterval(timer);
                console.log(newHPMonster)
                charAttack(chosenCharacter, chosenMonster);
                checkContinue(newHPCharacter, newHPMonster);
                console.log("Monster HP: " + newHPMonster);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            monAttack(chosenCharacter, chosenMonster);
            checkContinue(newHPCharacter, newHPMonster);
            console.log("Character HP: " + newHPCharacter);
        }
    }, 1000)
};

function checkLetters(letter) {
    let letterInWord = false;
    for (var i = 0; i < wordBlank; i++) {
      if (randomWord[i] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (let j = 0; j < wordBlank; j++) {
        if (randomWord[j] === letter) {
          hiddenWord[j] = letter;
        }
      }
      guessWord.textContent = hiddenWord.join(" ");
    }
};

document.addEventListener("keydown", function(event) {
   
    let key = event.key.toLowerCase();
    let alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
      let letterGuess = event.key;
      checkLetters(letterGuess);
      checkWin();
    }
});

async function checkWin() {
  if (randomWord === hiddenWord.join('')) {
    console.log("Winner is you");
    win = true;
   //await winGame();
  }
};

let charAttack = function (character, monster) {
   
      newHPMonster = (newHPMonster - (character.attack - monster.defense))
      hitpDisplayMonster.textContent = newHPMonster;
};

let monAttack = function (character, monster) {

      newHPCharacter = (newHPCharacter - (monster.attack - character.defense))
      hitpDisplay.textContent = newHPCharacter;
};

function checkContinue(hpchar, hpmons) {
    if (hpchar > 0 && hpmons > 0) {
      console.log(chosenMonster);
      startFight(chosenMonster)
    } else if (hpmons <= 0){
      winGame()
    } else {
      loseGame()
    }
};
// winGame = () => {
//     guessWord.textContent = "You Have Defeated ME!";
//     startButton.disabled = false;
//     choice++
//     chooseMonster(choice)
// };
winGame = async () => {
  guessWord.textContent = "You Have Defeated ME!";
  startButton.disabled = false;
  choice++
  console.log(choice);
  if (choice >= 4){
    guessWord.textContent = "You have defeated all the monsters!";
    startButton.disabled = true;
    // Function for finishing the game?
    return;
  }
  background.setAttribute("style", `background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(../img/bossroom${choice}.gif);`);
 await chooseMonster(choice)
};


loseGame = () => {
    guessWord.textContent = "You Will Never Defeat ME!";
    startButton.disabled = false;
};

async function startAll(event) {
  event.preventDefault();
  // chooseMonster(choice);
  chosenMonster = JSON.parse(localStorage.getItem('monster'));
  //console.log(chosenMonster);
  
  await displayMonster(chosenMonster);
  startFight(chosenMonster)
} 

startButton.addEventListener("click", startAll);



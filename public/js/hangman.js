const guessWord = document.getElementById('guessword-el');
const startButton = document.getElementById('btn-el');
const timerEl = document.getElementById('time-el');
let chosenCharacter = JSON.parse(localStorage.getItem('character'));
console.log(chosenCharacter);
let chosenMonster = JSON.parse(localStorage.getItem('monster'));
console.log(chosenMonster)

async function chooseMonster(choice) {
  reqUrl = choice;

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

function init() {
  chooseMonster(1)
};

let gameWord = "";
let wordBlank = 0;
let win = false;
let timer;
let timerCount;
let choice = 1


let fullWord = [];
let hiddenWord = [];

let words = chosenMonster.hangmans;

function startFight(event) {
    event.preventDefault();
    win = false;
    timerCount = 30;
    startButton.disabled = true;
    startGuess();
    startTimer();
};

function startGuess() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord)
    fullWord = randomWord.word.split('');
    wordBlank = fullWord.length;
    console.log(fullWord)
    hiddenWord = [];

    for (let i = 0; i < wordBlank; i++) {
        hiddenWord.push("_");
    }   
    guessWord.textContent = hiddenWord.join(' ');
};

function winRound() {
  if (randomWord === hiddenWord.join('')) {
    win = true;
    guessWord.textContent = "AAARRRGH!!!!";
  }
};

function loseRound() {
  if (randomWord !== hiddenWord.join('')) {
    win = false;
    guessWord.textContent = "HAHAHAHAHA!!!";
  }
};


function checkWin() {
    if (randomWord === hiddenWord.join('')) {
      win = true;
      winGame();
    }
  };

winGame = () => {
    guessWord.textContent = "You Have Defeated ME!";
    startButton.disabled = false;
    choice++
    chooseMonster(choice)
};

loseGame = () => {
    guessWord.textContent = "You Will Never Defeat ME!";
    startButton.disabled = false;
};

function startTimer() {
  timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
          if (win && timerCount > 0) {
              clearInterval(timer);
              winGame();
          }
      }
      if (timerCount === 0) {
          clearInterval(timer);
          loseGame();
      }
  }, 1000)
}


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


  init();
  startButton.addEventListener("click", startFight);


  


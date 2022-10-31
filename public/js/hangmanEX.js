const guessWord = document.getElementById('guessword-el');
const startButton = document.getElementById('btn-el');
const timerEl = document.getElementById('time-el');
const background = document.querySelector('.full-page');

let gameWord = "";
let wordBlank = 0;
let win = false;
let timer;
let timerCount;


let fullWord = [];
let hiddenWord = [];

let words = ['sword', 'shield', 'armor', 'magic', 'staff'];

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
    fullWord = randomWord.split('');
    wordBlank = fullWord.length;
    console.log(fullWord)
    hiddenWord = [];

    for (let i = 0; i < wordBlank; i++) {
        hiddenWord.push("_");
    }   
    guessWord.textContent = hiddenWord.join(' ');
};


function checkWin() {
    if (randomWord === hiddenWord.join('')) {
      win = true;
      winGame();
    }
  };

winGame = () => {
    background.setAttribute("style", "background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(../img/bossroom2.gif);");
    guessWord.textContent = "You Have Defeated ME!";
    startButton.disabled = false;
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



  startButton.addEventListener("click", startFight);


  


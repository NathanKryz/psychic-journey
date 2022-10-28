const guessWord = document.getElementById('guessword-el');
const startButton = document.getElementById('btn-el');

let gameWord = "";
let wordBlank = 0;
let win = false;

let fullWord = [];
let hiddenWord = [];

let words = ['sword', 'shield', 'armor', 'magic', 'staff'];

function startFight(event) {
    event.preventDefault();
    win = false;
    startButton.disabled = true;
    startGuess();
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
    guessWord.textContent = "You Have Defeated ME!";
    startButton.disabled = false;
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
    console.log('hello')
   
    let key = event.key.toLowerCase();
    let alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
      let letterGuess = event.key;
      checkLetters(letterGuess);
      checkWin();
    }
  });

  startButton.addEventListener("click", startFight);



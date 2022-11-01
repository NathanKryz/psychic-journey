// when button is pressed from login screen the player is taken to character selection screen
let playButton = document.querySelector('.butPlay');

playButton.setAttribute("style", "opacity: 1");

playButton.addEventListener("click", startGame);

function startGame(event) {
  event.preventDefault();
  document.location.replace('/characters');
};
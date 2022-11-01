const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

let playButton = document.querySelector('.butPlay');

playButton.setAttribute("style", "opacity: 1");

playButton.addEventListener("click", startGame);

function startGame(event) {
  event.preventDefault();
  document.location.replace('/characters');
};
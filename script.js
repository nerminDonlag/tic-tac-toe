let activePlayer = 'X';

function switchPlayer(player) {
  let currentPlayer = player;
  if(currentPlayer == 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  return currentPlayer;
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('click', function playCell() {
    cell.style.backgroundColor = 'black';
    activePlayer = switchPlayer(activePlayer);
    cell.innerHTML = `${activePlayer}`;
    cell.removeEventListener('click', playCell);
  });
});
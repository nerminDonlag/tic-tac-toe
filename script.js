let activePlayer = 'X';

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('click', function playCell() {
    cell.style.backgroundColor = 'black';
    cell.innerHTML = `${activePlayer}`;
    cell.classList.add(`${activePlayer.toLocaleLowerCase()}`);
    checkWinner();
    activePlayer = switchPlayer(activePlayer);
    cell.removeEventListener('click', playCell);
  });
});

document.querySelector('button')
  .addEventListener('click', () => {
    window.location.reload();
  });

function switchPlayer(player) {
  let currentPlayer = player;
  if (currentPlayer == 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  return currentPlayer;
}

function setWinner() {
  document.querySelector('.message > p')
      .innerHTML = `${activePlayer} won!`;
  document.querySelector('.message')
      .style.display = 'flex';
}

function checkWinner() {
  if (cells[0].classList.contains('x')) {
    if (cells[1].classList.contains('x')) {
      if (cells[2].classList.contains('x')) {
        setWinner();
      }
    }
    if (cells[3].classList.contains('x')) {
      if (cells[6].classList.contains('x')) {
        setWinner();
      }
    }
    if (cells[4].classList.contains('x')) {
      if (cells[8].classList.contains('x')) {
        setWinner();
      }
    }
  }
  if (cells[1].classList.contains('x')) {
    if (cells[4].classList.contains('x')) {
      if (cells[7].classList.contains('x')) {
        setWinner();
      }
    }
  }
  if (cells[2].classList.contains('x')) {
    if (cells[5].classList.contains('x')) {
      if (cells[8].classList.contains('x')) {
        setWinner();
      }
    }
  }
  if (cells[3].classList.contains('x')) {
    if (cells[4].classList.contains('x')) {
      if (cells[5].classList.contains('x')) {
        setWinner();
      }
    }
  }
  if (cells[6].classList.contains('x')) {
    if (cells[7].classList.contains('x')) {
      if (cells[8].classList.contains('x')) {
        setWinner();
      }
    }
    if(cells[4].classList.contains('x')) {
      if(cells[2].classList.contains('x')){
        setWinner();
      }
    }
  }

  if (cells[0].classList.contains('o')) {
    if (cells[1].classList.contains('o')) {
      if (cells[2].classList.contains('o')) {
        setWinner();
      }
    }
    if (cells[3].classList.contains('o')) {
      if (cells[6].classList.contains('o')) {
        setWinner();
      }
    }
    if (cells[4].classList.contains('o')) {
      if (cells[8].classList.contains('o')) {
        setWinner();
      }
    }
  }
  if (cells[1].classList.contains('o')) {
    if (cells[4].classList.contains('o')) {
      if (cells[7].classList.contains('o')) {
        setWinner();
      }
    }
  }
  if (cells[2].classList.contains('o')) {
    if (cells[5].classList.contains('o')) {
      if (cells[8].classList.contains('o')) {
        setWinner();
      }
    }
  }
  if (cells[3].classList.contains('o')) {
    if (cells[4].classList.contains('o')) {
      if (cells[5].classList.contains('o')) {
        setWinner();
      }
    }
  }
  if (cells[6].classList.contains('o')) {
    if (cells[7].classList.contains('o')) {
      if (cells[8].classList.contains('o')) {
        setWinner();
      }
    }
    if(cells[4].classList.contains('o')) {
      if(cells[2].classList.contains('o')){
        setWinner();
      }
    }
  }
}
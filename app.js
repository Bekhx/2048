import moveRightAndDown from './modules/moveRightAndDown.js';
import moveLeftAndUp from './modules/moveLeftAndUp.js';
import changeColorSquares from './modules/changeColorSquares.js';
import score from './modules/score.js';

const gameArea = document.querySelector('.game-area');

const keys = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  right: 'ArrowRight',
  left: 'ArrowLeft'
};

for (let i = 0; i < 16; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  gameArea.insertAdjacentElement('afterbegin', square);
};
const square = document.querySelectorAll('.square');

function randomSquare(index) {
  if (!square[index].textContent) {
    square[index].style.background = 'lemonchiffon';
    square[index].textContent = 2;
  }
};

// Entry
let randomSquareIndex = Math.floor(Math.random() * 16);
randomSquare(randomSquareIndex);

const axisX = [
  [square[0], square[1], square[2], square[3]],
  [square[4], square[5], square[6], square[7]],
  [square[8], square[9], square[10], square[11]],
  [square[12], square[13], square[14], square[15]]
];
const axisY = [
  [square[0], square[4], square[8], square[12]],
  [square[1], square[5], square[9], square[13]],
  [square[2], square[6], square[10], square[14]],
  [square[3], square[7], square[11], square[15]]
];

document.addEventListener('keydown', e => {
  let randomSquareIndex = Math.floor(Math.random() * 16);

  if (e.code == keys.up) {
    moveLeftAndUp(axisY);
    randomSquare(randomSquareIndex);
    changeColorSquares();
    score();
  }

  if (e.code == keys.down) {
    moveRightAndDown(axisY);
    randomSquare(randomSquareIndex);
    changeColorSquares();
    score();
  }

  if (e.code == keys.right) {
    moveRightAndDown(axisX);
    randomSquare(randomSquareIndex);
    changeColorSquares();
    score();
  }

  if (e.code == keys.left) {
    moveLeftAndUp(axisX);
    randomSquare(randomSquareIndex);
    changeColorSquares();
    score();
  }
});
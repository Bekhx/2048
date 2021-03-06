import moveRightAndDown from './modules/moveRightAndDown.js';
import moveLeftAndUp from './modules/moveLeftAndUp.js';
import changeColorSquares from './modules/changeColorSquares.js';
import score from './modules/score.js';

const gameArea = document.querySelector('.game-area'),
      up = document.querySelector('#up'),
      down = document.querySelector('#down'),
      right = document.querySelector('#right'),
      left = document.querySelector('#left');

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

function moveSquares(fn, arr) {
  let randomSquareIndex = Math.floor(Math.random() * 16);
  fn(arr);
  randomSquare(randomSquareIndex);
  changeColorSquares();
  score();
};

document.addEventListener('keydown', e => {
  if (e.code == keys.up) {
    moveSquares(moveLeftAndUp, axisY);
  }

  if (e.code == keys.down) {
    moveSquares(moveRightAndDown, axisY);
  }

  if (e.code == keys.right) {
    moveSquares(moveRightAndDown, axisX);
  }

  if (e.code == keys.left) {
    moveSquares(moveLeftAndUp, axisX);
  }
});


up.addEventListener('click', () => {
  moveSquares(moveLeftAndUp, axisY);
});
down.addEventListener('click', () => {
  moveSquares(moveRightAndDown, axisY);
});
right.addEventListener('click', () => {
  moveSquares(moveRightAndDown, axisX);
});
left.addEventListener('click', () => {
  moveSquares(moveLeftAndUp, axisX);
});
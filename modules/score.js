function score() {
  const squares = document.querySelectorAll('.square');
  const scoreResult = document.querySelector('.result-score');
  let numbersOfScore = [];

  squares.forEach(i => {
    if (i.textContent) {
      numbersOfScore.push(i.textContent);
    }
  });

  function fn(accumulator, a) {
    return parseInt(accumulator) + parseInt(a);
  }

  let sum = numbersOfScore.reduce(fn, 0);
  scoreResult.textContent = sum;
};

export default score;
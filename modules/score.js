function score() {
  const squares = document.querySelectorAll('.square');
  const scoreResult = document.querySelector('.result-score');
  let numbersOfScore = [];

  squares.forEach(i => {
    if (i.textContent) {
      numbersOfScore.push(i.textContent);
    }
  });

  function calcScore(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum;
  }

  scoreResult.textContent = calcScore(numbersOfScore);
  numbersOfScore = [];
};

export default score;
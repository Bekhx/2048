function changeColorSquares() {
  const squares = document.querySelectorAll('.square');
  const colors = ['lemonchiffon', 'khaki', 'sandybrown', 'darksalmon', 'indianred', 'tomato', 'orange', 'orangered', 'darkorange', 'darkseagreen', 'forestgreen']
  const squareNum = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

  squares.forEach(item => {
    for (let i = 0; i <= 11; i++) {
      if (item.textContent == squareNum[i]){
        item.style.background = colors[i];
      };
    };
  });  
};

export default changeColorSquares;
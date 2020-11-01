function changeColorSquares() {
  const squares = document.querySelectorAll('.square');
  const colors = ['lemonchiffon', 'khaki', 'sandybrown', 'darksalmon', 'indianred', 'tomato', 'orange', 'orangered', 'darkorange', 'darkseagreen', 'forestgreen']

  squares.forEach(item => {
    if (item.textContent == 2){
      item.style.background = colors[0];
    };
    if (item.textContent == 4){
      item.style.background = colors[1];
    };
    if (item.textContent == 8){
      item.style.background = colors[2];
    };
    if (item.textContent == 16){
      item.style.background = colors[3];
    };
    if (item.textContent == 32){
      item.style.background = colors[4];
    };
    if (item.textContent == 64){
      item.style.background = colors[5];
    };
    if (item.textContent == 128){
      item.style.background = colors[6];
    };
    if (item.textContent == 256){
      item.style.background = colors[7];
    };
    if (item.textContent == 512){
      item.style.background = colors[8];
    };
    if (item.textContent == 1024){
      item.style.background = colors[9];
    };
    if (item.textContent == 2048){
      item.style.background = colors[10];
    };
  });  
};

export default changeColorSquares;
function moveRightAndDown(arr) {

  function rightAndDown(data) {
    let newData = [];
    data.forEach(item => {
      if (item.textContent) {
        newData.unshift(item.textContent);
        item.style.background = '#999';
        item.textContent = '';
      }
    });
    newData.forEach(item => {
      parseInt(item);
    });

    if (newData.length) {
      // square [3]
      if (!data[3].textContent) {
        data[3].textContent = newData[0];
        } else if (data[3].textContent === newData[0]) {
          data[3].textContent = newData[0] * 2;
        } else {
          data[2].textContent = newData[0];
        };
        // square [2]
        if (!data[2].textContent) {
          if (data[3].textContent === newData[1]) {
            data[3].textContent = newData[1] * 2;
          } else {
            data[2].textContent = newData[1];
          }
        } else if (data[2].textContent === newData[1]) {
          data[2].textContent = newData[1] * 2;
        } else {
          data[1].textContent = newData[1];
        };
        // square [1]
        if (!data[1].textContent) {
          if (data[2].textContent === newData[2]) {
            data[2].textContent = newData[2] * 2;
          } else {
            data[1].textContent = newData[2];
          }
        } else if (data[1].textContent === newData[2]) {
          data[1].textContent = newData[2] * 2;
        } else {
          data[0].textContent = newData[2];
        };
        // square [0]
        if (!data[0].textContent) {
          if (data[1].textContent === newData[3]) {
            data[1].textContent = newData[3] * 2;
          } else {
            data[0].textContent = newData[3];
          }
        };
    };
    newData = [];
  }
  rightAndDown(arr[0]);
  rightAndDown(arr[1]);
  rightAndDown(arr[2]);
  rightAndDown(arr[3]);
};

export default moveRightAndDown;
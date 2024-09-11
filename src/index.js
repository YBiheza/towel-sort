
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }

    let arr = [];
    let j = 0;
    let size = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
  
      }
      if (j > size) {
        size = j;
      }
    }
  
    j = 0;
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        while (j < size && typeof(matrix[i][j]) != 'undefined') {
          if (j < size) {
            arr.push(matrix[i][j]);
            j++;
          } /*else {
            j = j;
        }*/
      }
      if (i != matrix.length-1) {
        j = matrix[i+1].length-1;
      } else {
        j= 0;
      }
    } else 
        while (j >= 0 && typeof(matrix[i][j]) != 'undefined') {
          arr.push(matrix[i][j]);
          if (j != 0) {
            j--;
          } else {
            j = 0;
            break;
          }
        }
      }
    return arr;
  }
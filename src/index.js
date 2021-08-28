
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let Arr = [];
    if (matrix == null) {
      return Arr;
    }
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 == 0) {
        Arr.push(matrix[i][j]);
      } else {
       let length = matrix[i].length;
        Arr.push(matrix[i][(length-1-j)]);
     }
    }
   }
return Arr;
};

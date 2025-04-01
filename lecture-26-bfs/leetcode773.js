/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let rootColor = image[sr][sc]
    let queue = [[sr,sc]]
    let visited = new Set()
    while(queue.length > 0){
        let currentIndex = queue.shift()
        let currentRow = currentIndex[0]
        let currentCol = currentIndex[1]

        if(!visited.has(currentIndex)){
            visited.add(''+currentRow+currentCol)

            let neighborNodes = [[currentRow,currentCol - 1],[currentRow,currentCol + 1],[currentRow + 1, currentCol],[currentRow - 1,currentCol]]

            for(let neighbor of neighborNodes){
                let strNeighborNodeIndex = ''+neighbor[0]+neighbor[1]
                if(neighbor[0] >= 0 && neighbor[1] >= 0 
                    && neighbor[0] < image.length && neighbor[1] < image[0].length 
                    && !visited.has(strNeighborNodeIndex) 
                    && image[neighbor[0]][neighbor[1]] === rootColor){
                    queue.push([neighbor[0],neighbor[1]])
                    image[neighbor[0]][neighbor[1]] = color
                }
            }
        }
    }
    image[sr][sc]=color
    return image
};


image = [[1,1,1],[1,1,0],[1,0,1]]
console.log("original image")
matprint(image)
console.log("==============================")
console.log("flood fill image")
matprint(floodFill(image,1,1,2))



/**
 * Pretty print a matrix helper function
 * https://gist.github.com/lbn/3d6963731261f76330af
 * @param {*} mat 
 */
function matprint(mat, path = []) {
    let shape = [mat.length, mat[0].length];
    function col(mat, i) {
        return mat.map(row => row[i]);
    }
    let colMaxes = [];
    for (let i = 0; i < shape[1]; i++) {
        colMaxes.push(Math.max.apply(null, col(mat, i).map(n => n.toString().length)));
    }
  
    mat.forEach((row, rowIdx) => {
      console.log.apply(null, row.map((val, j) => {
        if (val === 0) val = '-';
        if(path.length != 0) {
          if(path.includes('' + rowIdx + j)) val = '*'
        }
        // if (rowIdx === 0 && j == 0) val = 'S';
        // if (rowIdx === 7 && j == 7) val = '⭐';
        return new Array(colMaxes[j]-val.toString().length+1).join(" ") + val.toString() + "  ";
      }));
    });
  }
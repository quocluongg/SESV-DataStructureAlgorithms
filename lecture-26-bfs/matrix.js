//Total: Space: O(n^2), Time: O(n^3) ~ n is length edges matrix
const shortestPath = (matrix, start, end) => {

    matprint(matrix)
    console.log("============================")
    let queue = [''+start[0]+start[1]]
    let visited = new Set()
    let paths = [['00']]
    
    //Space: O(1), Time: O(n^2) all node in matrix
    while(queue.length > 0){
        let currentIndex = queue.shift()
        let currentRow = parseInt(currentIndex[0])
        let currentCol = parseInt(currentIndex[1])
        let neighborNodes = [[currentRow,currentCol - 1],[currentRow,currentCol + 1],[currentRow + 1, currentCol],[currentRow - 1,currentCol]] // list of 4 neighbors' indexes: left, right, up, down
        visited.add(currentIndex)
        let newPath = []
        
        //Time: O(4) ~ O(1) +  
        for(let neighbor of neighborNodes) {
            let strNeighborNodeIndex = ''+neighbor[0]+neighbor[1]
            if(neighbor[0] >= 0 && neighbor[1] >= 0 && neighbor[0] < matrix.length && neighbor[1] < matrix[0].length && !visited.has(strNeighborNodeIndex) && matrix[neighbor[0]][neighbor[1]] !== 1){
                queue.push(strNeighborNodeIndex)

                //update path
                //Time: O(n)
                for(let j = 0 ; j < paths.length ; j++) {
                  let path = paths[j]
                  if(path[path.length - 1] === currentIndex){
                    let updatePath = path.concat(strNeighborNodeIndex)
                    if (strNeighborNodeIndex === ''+end[0]+end[1]) {
                      matprint(matrix, updatePath);
                      return updatePath
                  }
                    newPath.push(updatePath)
                  } else {
                    newPath.push(path)
                  }
                }
            }
        }
        if(newPath.length) paths = newPath
    }
    // console.log(paths)
}
  
  const matrix = [
    [0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];
  
console.log(shortestPath(matrix, [0, 0], [7, 7]));



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
        if (rowIdx === 0 && j == 0) val = 'S';
        if (rowIdx === 7 && j == 7) val = '⭐';
        return new Array(colMaxes[j]-val.toString().length+1).join(" ") + val.toString() + "  ";
      }));
    });
  }
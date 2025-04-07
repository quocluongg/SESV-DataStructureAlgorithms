/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
//Process:
//1. use root color to save the original color
//2. use dfs to search all node have color equal root color and 
//Space: O(n) ~ set + stack, Time: O(n) ~ visit all node in worst case
const floodFillRecursion = (image, sr, sc, color) => {
    let rootColor = image[sr][sc]

    const dfs = ([currentRow,currentCol], visited) => {
        //base case
        if(
            currentRow < 0 || currentCol < 0
            || currentRow >= image.length
            || currentCol >= image[0].length
            || image[currentRow][currentCol]!==rootColor
            || visited.has(`${currentRow},${currentCol}`)
        ) return

        //fill color
        if(image[currentRow][currentCol]===rootColor) image[currentRow][currentCol] = color

        //mark visited
        visited.add(`${currentRow},${currentCol}`)

        let neighborNodes = [
            [currentRow,currentCol-1],  //left
            [currentRow,currentCol+1],  //rigth
            [currentRow+1,currentCol],  //up
            [currentRow-1,currentCol]   //down
        ]

        for (const [neighborRow,neighborCol] of neighborNodes) {
            //next frame: continue with neighbor node, visited set
            dfs([neighborRow,neighborCol],visited)
        }
    }

    dfs([sr,sc], new Set())

    image[sr][sc] = color

    return image
}
let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
matprint(image)
console.log("====================")
matprint(floodFillRecursion(image, sr, sc, color))

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
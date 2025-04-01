/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let visited = new Set();

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
                let queue = [[i, j]];

                while(queue.length > 0) {
                    let currentIndex = queue.shift();
                    let currentRow = currentIndex[0];
                    let currentCol = currentIndex[1]; // ✅ Fixed here

                    if(!visited.has(`${currentRow},${currentCol}`)) {
                        visited.add(`${currentRow},${currentCol}`);

                        let neighborNodes = [
                            [currentRow, currentCol - 1], // left
                            [currentRow, currentCol + 1], // right
                            [currentRow - 1, currentCol], // up
                            [currentRow + 1, currentCol]  // down
                        ];

                        for(let neighbor of neighborNodes) {
                            let neighborRow = neighbor[0]; 
                            let neighborCol = neighbor[1]; 

                            if(
                                neighborRow >= 0 && neighborCol >= 0
                                && neighborRow < grid.length
                                && neighborCol < grid[0].length // ✅ Fixed: Use grid[0].length
                                && !visited.has(`${neighborRow},${neighborCol}`)
                                && grid[neighborRow][neighborCol] === '1'
                            ) {
                                queue.push([neighborRow, neighborCol]);
                                visited.add(`${neighborRow},${neighborCol}`);
                            }
                        }
                    }
                }
                count++;
            }
        }
    }
    return count;
};

// Test case
grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(grid)); // Output: 1

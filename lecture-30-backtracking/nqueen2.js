// Total:
// Space: O(n^2) – stores result states and temporary sets
// Time: O(n^n) – brute-force search, n choices per row across n rows
const backtrackDFS = (n) => {
    let rs = [] // store all valid solutions
    let tmpRs = [] // temporary state for current DFS path

    //Process:
    //1. use DFS to try placing queen in each row
    //2. if tmpRs is not valid (not isBound), return
    //3. if placed all queens (queenNum > n), push a deep copy of tmpRs to rs
    //4. else try placing current queen in each column of the current row
    //   push the queen to tmpRs, dfs next, then backtrack by pop

    const dfs = (queenNum, tmpRs) => {
        // check if current state is valid
        //Space: O(n^2), Time: O(n^2)
        if (!isBound(tmpRs, n)) return

        // if placed all queens
        if (queenNum > n) {
            rs.push([...tmpRs]) // push deep copy of solution
            return
        }

        // loop through all columns to place queen
        //Space: O(1), Time: O(n)
        for (let i = 0; i < n; i++) {
            tmpRs.push([queenNum, queenNum - 1, i]) // add queen: [number, row, column]
            dfs(++queenNum, tmpRs) // recursive call for next queen
            tmpRs.pop() // backtrack: remove last queen
            queenNum-- // restore queen number
        }
    }

    dfs(1, tmpRs) // start DFS from queen 1

    return rs // return 
}

// Function to check whether the current placement of queens is valid
// Process:
// 1. Use a `Set` to track which columns have been used.
// 2. Use another `Set` to track all diagonals under attack.
// 3. For each queen, add all diagonal attack positions into the diagonal set.
// 4. Check whether the last queen is in a safe position (not in an attacked column or diagonal).

// Space: O(n^2) – diagonal set can store up to 4n values per queen
// Time: O(n^2) – for each queen, mark 4n diagonal positions

const isBound = (tmpResult, n) => {
    if(tmpResult.length === 0) return true
    let cols = new Set()      // used columns
    let diagonal = new Set()  // all diagonals under attack

    for (let i = 0; i < tmpResult.length; i++) {
        let row = tmpResult[i][1]
        let col = tmpResult[i][2]

        cols.add(col) // mark column as used

        // mark all diagonals under attack by this queen
        for (let k = 1; k <= n; k++) {
            diagonal.add(`${row + k},${col + k}`) // bottom-right
            diagonal.add(`${row - k},${col - k}`) // top-left
            diagonal.add(`${row + k},${col - k}`) // bottom-left
            diagonal.add(`${row - k},${col + k}`) // top-right
        }
    }

    // check last placed queen
    let [_, lastRow, lastCol] = tmpResult[tmpResult.length - 1]

    // if duplicate column or diagonal conflict, return false
    if ((cols.size !== tmpResult.length) || diagonal.has(`${lastRow},${lastCol}`)) {
        return false
    }

    return true // valid placement
}


console.log(backtrackDFS(4))

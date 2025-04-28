// Process:
// 1. Iterate through each row
// 2. For each row, try placing the queen in every column.
// 3. Build a state array to store the current queen placements.
// 4. Use `isBound` to check if the current state is valid (no same column or diagonal attacks).
// 5. If valid, continue placing queens in the next row.
// 6. Once all n queens are placed and valid, push the state into the result.

// Total:
// Space: O(n^2) – stores result states and temporary sets
// Time: O(n^n) – brute-force search, n choices per row across n rows

const backtrackInterative = (n) => {
    let rs = [] // store valid solutions

    // loop through row 0
    //Total: Time: O(n^n)
    //Time: O(n)
    for (let i = 0; i < n; i++) {
        // loop through row 1
        //Time: O(n)
        for (let j = 0; j < n; j++) {
            let state2 = [
                [1, 0, i], // queen 1 at row 0, column i
                [2, 1, j], // queen 2 at row 1, column j
            ]
            if (!isBound(state2, n)) continue // skip if invalid //Time: O(n^2)

            // loop through row 2
            //Time: O(n)
            for (let k = 0; k < n; k++) {
                let state3 = [
                    [1, 0, i],
                    [2, 1, j],
                    [3, 2, k], // queen 3 at row 2, column k
                ]
                if (!isBound(state3, n)) continue //Time: O(n^2)

                // loop through row 3
                //Time: O(n)
                for (let f = 0; f < n; f++) {
                    let state4 = [
                        [1, 0, i],
                        [2, 1, j],
                        [3, 2, k],
                        [4, 3, f], // queen 4 at row 3, column f
                    ]
                    if (isBound(state4, n)) rs.push(state4) // push valid solution //Time: O(n^2)
                }
            }
        }
    }

    return rs
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


console.log(backtrackInterative(4))

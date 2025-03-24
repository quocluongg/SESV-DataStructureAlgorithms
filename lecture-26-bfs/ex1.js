// Breadth First Search implementation in purest form

// relationship between nodes
const graph5 = [
    [1, 2], // SFO, index 0
    [0, 2, 3], // ORD, index 1
    [0, 1, 3, 4], // DEN, index 2
    [1, 2, 4], // JFK, index 3
    [2, 3], // IAH, index 4
]
  
// nodes' information
const idxToAirport = {
    '0': { name: 'SFO' },
    '1': { name: 'ORD' },
    '2': { name: 'DEN' },
    '3': { name: 'JFK' },
    '4': { name: 'IAH' }
}

//Space: O(n) ~ use Set, Time: O(n) ~ visit all node 
const breadFirstSearch = (root) => {
    let result = []
    let visited = new Set()
    let queue = [root]

    while(queue.length !== 0) {

        const currentNode = queue.shift() // dequeue

        // if we've never seen this node before, process,
        // otherwise, ignore the node
        if(!visited.has(currentNode)) {

            visited.add(currentNode) // add this node to seen list

            const currentNodeNeighbors = graph5[currentNode] // get the neighbors
            currentNodeNeighbors.forEach(node => !visited.has(node) && queue.push(node)) // enqueue neighbors
    
            result.push(idxToAirport[currentNode].name) // save current node to result

            console.log('result: ', result)
        }
    }
}

breadFirstSearch(0)
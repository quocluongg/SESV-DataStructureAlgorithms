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

//Space: O(n) ~ use Set, Time: O(n+m) ~ O(n) 
const breadFirstSearch = (root) => {
    //Space: O(3n) ~ O(n), Time: O(1) 
    let result = []
    let visited = new Set()
    let queue = [root]

    //Space: O(1), Time: O(n) - because queue will contain all node is n, we visit all node
    while(queue.length !== 0) {

        const currentNode = queue.shift() // dequeue
        
        //Space: O(1), Time: O(1)
        if(!visited.has(currentNode)) {

            //Space: O(1), Time: O(1)
            visited.add(currentNode)
            const currentNodeNeighbors = graph5[currentNode] // get the neighbors

            //Space: O(1), Time: O(m) ~ neighbor checks across (once from each node)
            currentNodeNeighbors.forEach(node => !visited.has(node) && queue.push(node)) // enqueue neighbors
    
            //Space: O(1), Time: O(1)
            result.push(idxToAirport[currentNode].name) // save current node to result

            console.log('result: ', result)
        }
    }
}

breadFirstSearch(0)
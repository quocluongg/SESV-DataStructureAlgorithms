
const graph = [
    [1], // Socks, index 0
    [2], // Shoes, index 1
    [3], // Shirt, index 2
    [4], // Jacket, index 3
    [5], // Backpack, index 4
    [], // School, index 5
    [7], // Underwear, index 6
    [2,4], // Pants, index 7
]
  
// nodes' information
const idxToItem = {
    '0': { name: 'Socks' },
    '1': { name: 'Shoes' },
    '2': { name: 'Shirt' },
    '3': { name: 'Jacket' },
    '4': { name: 'Backpack' },
    '5': { name: 'School' },
    '6': { name: 'Underwear' },
    '7': { name: 'Pants' },
}

// Total: Space: O(V), Time: O(V + E) | V: vertices, E: edges
// Process:
// 1. Init `result` and `visited`.
// 2. For each unvisited node, run DFS.
// 3. In DFS: use stack, mark visited, push neighbors.
// 4. After DFS, add temp result to `result`.
// 5. Reverse `result` for correct topo order.

const topologicalSort = (graph) => {

    //Space: O(V)
    let result = []
    // Space: O(V)
    let visited = new Set()

    //Total: Space: O(V), Time: O(V+E)
    //dfs to traversal
    const dfs = (i) => {
        //Space: O(V)
        let stack = [i]
        //Space: O(V)
        let tmp = []

        //Time: O(V)
        while(stack.length > 0){
            let currentNode = stack.pop() //pop the top

            if(!visited.has(currentNode)){
                visited.add(currentNode)
                tmp.push(idxToItem[currentNode].name) //Time: 1 push current to template

                //Time: O(E)
                for (const neighbor of graph[currentNode]) {
                    stack.push(neighbor) //Time: 1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                }
            }
        }

        result.push(tmp) //Time: 1
        console.log('result: ', tmp)
    }

    //Time: O(V)  Iterate through all nodes
    for(let i = 0; i < graph.length ; i++){
        if(!visited.has(i)) dfs(i)
    }

    //Time: O(V)
    return result.reverse()
} 


console.log('topo sort: ',topologicalSort(graph).flat().join(' -> '))
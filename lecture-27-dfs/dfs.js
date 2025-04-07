const graph5 = [
    [1, 2], // SFO, index 0
    [0, 2, 3], // ORD, index 1
    [0, 1, 3, 4], // DEN, index 2
    [1, 2, 4], // JFK, index 3
    [2, 3], // IAH, index 4
]

const idxToAirport = {
    '0': { name: 'SFO' },
    '1': { name: 'ORD' },
    '2': { name: 'DEN' },
    '3': { name: 'JFK' },
    '4': { name: 'IAH' }
}

//DFS
//Input:graph: adjacency list
//      start: node start
//Output: list traversal by Depth First Search
//Space: O(n) ~ stack + set, Time: O(n) ~ visit all node 
const dfs = (graph, start) => {
    //Space: O(1)
    let stack = [start] //stack
    let visited = new Set() //mark visit

    //Space: O(2n) ~ set + stack, Time: O(n) ~ visit all node
    while(stack.length > 0){

        let currentNode = stack.pop() //pop the stack

        if(!visited.has(currentNode)){

            visited.add(currentNode) //mark as visited
            console.log(idxToAirport[''+currentNode])

            //add neighbor to stack
            for (let neighbor of graph[currentNode]) {
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                }
            }
        }
    }
}


dfs(graph5,0)
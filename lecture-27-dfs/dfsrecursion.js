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

//Process:
//1. node has visited (BASE CASE)
//2. mark current node as visited
//3. recursion with child
//Space: O(n) ~ call stack, Time: O(n) ~ visit all node in graph
const dfsRecursion = (graph, root, visited) => {
    if(visited.has(root)) return //base case

    visited.add(root) //mark as visited
    console.log(idxToAirport[''+root])

    //add neighbor
    for (let neighbor of graph[root]) {
        //next frame: continue search with neighbor, visited set
        dfsRecursion(graph,neighbor,visited)
    }
}

dfsRecursion(graph5,0,new Set())
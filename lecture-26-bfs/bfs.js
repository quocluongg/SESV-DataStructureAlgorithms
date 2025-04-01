let graph = [
    [],             //node0
    [[0,1],[2,1]],  //node1
    [[3,1]],        //node2
    []              //node3
]

//Input:- graph: adjacency list
//      - startNode: index from 0(default index from 0) 
//Output: visit all node in graph layer by layer
const bfs = (graph, startNode) => {
    
    //Space: O(n), Time: O(1)
    let queue = [startNode] //queue
    let visited = new Set() //visited node

    //Time: O(n) --- visited all node in graph
    while(queue.length > 0){

        //dequeue
        let currentNodeIndex = queue.shift()

        //add neighbor node to queue
        if(!visited.has(currentNodeIndex)){
            visited.add(currentNodeIndex)
            console.log("Current visited: ", visited)
            
            //add neighbor node to queue
            //Time: O(k), k is all neighbor node => O(1)
            for (const neighborNode of graph[currentNodeIndex]) {
                if (!visited.has(neighborNode[0])) {
                    queue.push(neighborNode[0]);
                }
            }
        }
    }
}

bfs(graph,1)
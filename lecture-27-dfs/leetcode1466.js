/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = Array.from({length: n}, ()=> [])
    for(let [source,destination] of connections){
        graph[source].push(destination)
        graph[destination].push(source)
    }

    console.log(graph)
    let edges = []
    const dfsGetEdges = (node,visited) => {
        if(visited.has(node)) return

        visited.add(node)

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)) {
                console.log(visited)
                dfsGetEdges(neighbor,visited)
                edges.push([neighbor,node])
            }
        }
    }
    dfsGetEdges(0,new Set())
    let orignalEdges = new Set()
    let newEdges = new Set()
    for(let [source,destination] of connections){
        orignalEdges.add(`${source},${destination}`)
    }
    for(let [source,destination] of edges){
        newEdges.add(`${source},${destination}`)
    }
    
    let count = 0
    for (const element of newEdges) {
        if(!orignalEdges.has(element)) {
            count++
        }
    }

    console.log(count)
};

minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]])

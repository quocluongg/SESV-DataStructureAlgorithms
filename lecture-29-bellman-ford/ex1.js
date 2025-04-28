// Shortest path, Bellman-Ford

// NO NEGATIVE weight cycle in graph is a MUST
const graph = [
  [[1, 4], [3, 5]], // node 0, index 0
  [[4, 7]], // node 1, index 1
  [[1, 3]], // node 2, index 2
  [[2, -10]], // node 3, index 3
  [], // node 4, index 4
]

// graph contains NEGATIVE weight cycle
const graphWrong = [
  [[1, 4], [3, 5]], // node 0, index 0
  [[4, 7], [3, 6]], // node 1, index 1
  [[1, 3]], // node 2, index 2
  [[2, -10]], // node 3, index 3
  [], // node 4, index 4
]
  
//Process:
//1. build the vertexs and edges list 
//2. build the result map
//3. relax and update result

// Total: Space: O(V+E), Time: O(V*E)
const shortestPathBellmanFord = (graph, startIndex) => {
  // 1. build the vertexs and edges list 
  // Space: V + E -> O(V + E)
  let vertexs = [] //Space: V
  let edges = [] //Space: E
  //Time: V + E -> O(V + E)
  for(let i = 0; i < graph.length ; i++){
    vertexs.push(i)
    for(let neighbor of graph[i]) {
      edges.push([i,neighbor[0],neighbor[1]])
    }
  }
  console.log('vertex list: ', vertexs)
  console.log('edges list: ', edges)

  //2. build the result map
  //Space: V -> O(V), Time: O(V)
  let result = {}
  for(let i = 0; i < vertexs.length; i++){
    if(i === startIndex){
      result[i] = 0
      continue
    }
    result[i] = Infinity
  }
  console.log('result generation: ' , result)

  //3. relax
  //Space: O(1), Time: O(V*E)
  for(let i = 0;  i < vertexs.length ; i++) { //Time: V relax V time -> O(V)
    for(let [fromNode, toNode, weight] of edges){ //Time: E edges -> O(E)
      let newValue = Math.min(result[fromNode] + weight, result[toNode])
      result[toNode] = newValue
    }
  }
  
  //4. check graph has cycle
  //Time: O(E)
  for(let [fromNode, toNode, weight] of edges){ //Time: E edges -> O(E)
    let newValue = Math.min(result[fromNode] + weight, result[toNode])
    if(result[toNode] !== newValue){
      return 'Graph has cycle'
    }
  }
  return result
}


console.log(shortestPathBellmanFord(graphWrong, 0)) //Graph has cycle
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const graph = [
    [1], // Socks, index 0
    [2], // Shoes, index 1
    [3], // Shirt, index 2
    [4], // Jacket, index 3
    [5], // Backpack, index 4
    [], // School, index 5
    [7], // Underwear, index 6
    [2], // Pants, index 7
  ]

  var findOrder = function(numCourses, prerequisites) {
    // // Space: O(V), Time: O(V)
    // // create an adjacency list
    // const graph = Array.from({length: numCourses}, () => []);
    
    // // Time: O(E)
    // // build the graph from prerequisites
    // for (const [i, j] of prerequisites) graph[j].push(i);
    // console.log(graph)
    
    let result = []
    let visited = new Set()

    const dfs = (i) => {
        let stack = [i]
        let tmp = []
        while(stack.length > 0){
            let currentNode = stack.pop()
            if(!visited.has(currentNode)){
                visited.add(currentNode)
                for (const neighbor of graph[currentNode]) {
                    if(!visited.has(neighbor)) {
                        stack.push(neighbor)
                    }
                }
                tmp.push(currentNode)
            }
        }
        result.push(tmp)
    }

    for(let i = 0; i < graph.length ; i++){
        if(!visited.has(i)) dfs(i)
    }

    console.log(result)
    return []
};

console.log(findOrder(7, graph))
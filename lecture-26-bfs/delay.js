
//Process:
//1. convert time to adjacency list
//2. use bfs to traversal graph
//3. update path
//4. find maximum weight path
//Total: Space: O(n), Time: O(n)
var networkDelayTime = function(times, n, k) {
    
    //1. convert times to adjacency list
    //Space: O(n), Time: O(n)
    const graph = Array.from({ length: n + 1}, () => []);
    for(let [u,v,w] of times) {
        graph[u].push([v,w])
    }
    console.log(graph)

    //2. bfs
    //Space: O(n), Time: O(n) ~ visited all node
    let queue = [k]
    let visited = new Set()
    let paths = [[0,k]]
    while(queue.length > 0) {
        
        let currentIndex = queue.shift() //dequeue
        let newPaths = []; //store new path have modifies

        if(!visited.has(currentIndex)){
            visited.add(currentIndex) //have visited

            //add neighbor node
            for(let neighbor of graph[currentIndex]){

                let neighborIndex = neighbor[0]
                if(!visited.has(neighborIndex)){

                    queue.push(neighborIndex)
 
                    //3. update paths
                    for (let j = 0; j < paths.length; j++){
                        let path = paths[j];
                        if(path[path.length - 1] === currentIndex) {
                            let updatePath = path.concat(neighborIndex) //add more node to this path
                            updatePath[0] += neighbor[1] //update time weight path
                            newPaths.push(updatePath)
                        } else {
                            newPaths.push(path)
                        }
                    }
                }
            }
        }
        if (newPaths.length) paths = newPaths; //if path have modifies, update origin paths
        console.log(paths)
    }

    //4. find the maximum weight path
    if(visited.size !== n){
        return -1
    } else {
        let max = -Infinity
        for(let path of paths){
            if(path[0] > max) {
                max = path[0]
            }
        }
        return max
    }
};

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2)) //2
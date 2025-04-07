/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let stack = [0]
    let visited = new Set()
    let paths = [[0]]
    while(stack.length > 0){
        let currentIndex = stack.pop()
        let newPaths = []; //store new path have modifies
        
        if(!visited.has(currentIndex)) {
            visited.add(currentIndex)
            console.log('current node: ', currentIndex)
            for(let neighbor of graph[currentIndex]){
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                }
                console.log("current neighbor: ", neighbor)
                //3. update paths
                for (let path of paths){
                    if(path[path.length - 1] === currentIndex) {
                        let updatePath = path.concat(neighbor) //add more node to this path
                        newPaths.push(updatePath)
                        console.log('chạy vào 1')
                        console.log(newPaths)
                    } else {
                        if(newPaths,length) {
                            
                        }
                        newPaths.push(path)
                        console.log('chạy vào 2')
                        console.log(newPaths)
                    }
                }
                console.log('new path: ')
                console.log(newPaths)
            }
        }

        if (newPaths.length) paths = newPaths; //if path have modifies, update origin paths
    }
    return paths
};


console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))
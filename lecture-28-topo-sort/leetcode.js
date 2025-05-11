/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */

// Space: O(k^2), Time: O(k^2 + condition)
var buildMatrix = function(k, rowConditions, colConditions) {
    
    // build graphs for row and column conditions
    //Space: O(k+conditions), Time: O(k+conditions)
    let rowGraph = buildGraph(rowConditions)
    let colGraph = buildGraph(colConditions)
    
    // get order
    //Space: O(k), Time: O(k+condition)
    let rowOrder = topoSort(rowGraph);
    let colOrder = topoSort(colGraph);
    
    // if topological sort doesn't include all nodes, return an empty matrix|
    //Space: O(1), Time: O(1)
    if (rowOrder.length !== k || colOrder.length !== k) {
        return []
    }
    
    // create an empty k x k matrix
    // Space: O(k^2), Time: O(k^2)
    let matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    
    // create mappings for row and column
    // Space: O(k), Time: O(k)
    let rowPos = {}, colPos = {};
    for (let i = 0; i < k; i++) {
        rowPos[rowOrder[i]] = i;
        colPos[colOrder[i]] = i;
    }
    
    // place each number (1 to k)
    // Time: O(k)
    for (let num = 1; num <= k; num++) {
        matrix[rowPos[num]][colPos[num]] = num;
    }
    
    return matrix; // return the matrix
};

// Build graphs for row and column conditions
//Space: O(k+conditions), Time: O(k+conditions)
const buildGraph = (conditions) => {
    //Space: O(k), Time: O(k)
    let graph = Array.from({ length: k + 1 }, () => [])
    
    //Space:O(conditions), Time: O(conditions)
    for (let [i, j] of conditions) {
        graph[i].push(j)
    }
    return graph;
};

//Space: O(k), Time: O(k+condition)
const topoSort = (graph) => {
    let visited = new Set() //Space: O(k)
    let visiting = new Set() //Space: O(k)
    let order = [] //Space: O(k)
    let hasCycle = false //Space: O(1)
    
    // DFS
    const dfs = (node) => {
        if (visiting.has(node)) { // cycle detected 
            hasCycle = true;
            return;
        }
        if (visited.has(node)) return; // base case
        
        visited.add(node); // mark node as visited
        visiting.add(node); // add node to the current stack
        
        // FOR LOOP all neighbors
        for (const neighbor of graph[node]) {
            dfs(neighbor);
        }

        visiting.delete(node); // backtrack
        order.push(node); // add the node to the topological order
    };
    
    // DFS for every node in the graph
    //Time: O(k)
    for (let i = 1; i <= k; i++) {
        if (!visited.has(i)) { // if the node is not visited, start DFS
            dfs(i);
            if (hasCycle) return []; // if has cycle, return an empty array
        }
    }
    
    //Time: O(k)
    return order.reverse(); // return the topological order in reverse
}
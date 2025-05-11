//Input: n items has weight and profit
//       weight: array
//       profit: array
//       bag with capacity W
//Output: max of profit bag have contain
//Space: O(n * W), Time: O(n * W) n is element in bag
const knapsack = (weights, values, W) => {

    const n = weights.length // Space: O(1)
    const cache = {} // State object: key = "i,remaining" //Space: O(n * W)

    //DFS
    const dfs = (i, remaining) => {
        //base case
        if (i === n || remaining === 0) return 0

        const key = i + ',' + remaining //key
        if (cache[key] !== undefined) return cache[key] //if cached return

        const skip = dfs(i + 1, remaining) //decision 1: skip

        let take = 0 //decision 2: take
        if (weights[i] <= remaining) {
            take = values[i] + dfs(i + 1, remaining - weights[i])
        }   

        //calculate information
        cache[key] = Math.max(take, skip)
        return cache[key]
    } 
    
    let rs = dfs(0, W)
    console.log(cache)
    return rs
}

console.log(knapsack([1,1,1],[10,20,30],2)) //Output: 3

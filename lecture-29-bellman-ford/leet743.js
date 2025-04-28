/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    //1.result map
    let result = {}
    for(let i = 1; i <= n ; i++){
        if(i === k) {
            result[i] = 0
            continue
        }
        result[i] = Infinity
    }

    //2. relax
    for(let i = 1; i <= n; i++){
        for(let [fromNode, toNode, weight] of times){
            result[toNode] = Math.min(result[fromNode]+weight,result[toNode])
        }
    }

    console.log(result)
};


networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2)
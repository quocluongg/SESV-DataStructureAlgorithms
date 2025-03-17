//Input: coins: array - sum: int
//Output: return the minimum number of coins to sum up to a given sum
//Space: O(n), Time: O(nlogn) with n is number of coin types
const greedy = (coins, sum) => {

    //1. sort the array biggest -> smallest
    coins.sort((a, b) => b - a) // O(nlogn)
    
    //2. print initial value
    console.log('coins:', coins)
    console.log('sum:', sum)
    
    //3. contain result and sum remaining
    const result = {}
    let sumRemain = sum
  
    //4. use greedest choice: choice coin have biggest value
    for(let i = 0; i < coins.length; i++) { // O(n)
      const numCoin = Math.floor(sumRemain/coins[i])
      if(numCoin > 0) {
        result[coins[i] + ' coin(s)'] = numCoin
        sumRemain = sumRemain - numCoin * coins[i]
      }
    }
  
    result.sumRemain = sumRemain
    
    return result
  }
  
  console.log(JSON.stringify(greedy([1, 2, 5], 21),null, 4));
  console.log('========================')
  console.log(JSON.stringify(greedy([2, 5], 21),null, 4));
//Space: O(n), Time: O(n)
var countGoodSubstrings = (s) => {
    //Space: O(n)
    const goodSubStrings = [] // O(n) n element in worst case if all substring is good

    //Time: O(n), n is string length
    for(let i = 0; i < s.length - 2; i++) { // O(n)
        const set = new Set([s[i], s[i+1], s[i+2]]) // O(1)
        if(set.size === 3) { // O(1)
            goodSubStrings.push(s[i] + s[i+1] + s[i+2]) // O(1)
        }
    }

    console.log('original string:', s) // O(1)
    console.log('good substrings:', goodSubStrings) // O(1)
    console.log('unique good substrings:', new Set(goodSubStrings)) //Space: O(n)

    return new Set(goodSubStrings).size
}

//Total: Space: O(n), Time: O(n)
var lengthOfLongestSubstring = function(s) {
    console.log('original:', s)
    
    //Space: 2n -> O(n)
    let longestSubStrLen = 0 // O(1)
    let str = '' // O(n) n is in worst case
    let seen = new Set() // O(n) n in worst case
  
    //Space: O(n), Time: O(n)
    for(let i = 0; i < s.length; i++) { // O(n)
      if(!seen.has(s[i])) {
        str = str + s[i] 
        seen.add(s[i]) 
        longestSubStrLen = Math.max(longestSubStrLen, str.length)
      } else { 
        str = str.substring(str.indexOf(s[i]) + 1) + s[i]
        seen = new Set(str.split('')) //Space: O(n)
      }
      console.log('str:', str)
    }
    
    return longestSubStrLen // O(1)
  }
  
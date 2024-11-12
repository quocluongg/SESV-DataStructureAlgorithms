/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];      //Time: 1, Space: _

  const result = [];                       //Time: 1, Space: 1
  const mapping = {                        //Time: 1, Space: 1
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (index, string) => {         //Time: 1, Space: 1
    if (string.length === digits.length) { //Time: 1, Space: _
      return result.push(string);          //Time: 1, Space: _
    }         

    for (const char of mapping[digits[index]]) { //Time 3 or 4, Space: 3 or 4
      dfs(index + 1, string + char);             //Time: 4^n, Space: n             
    }
  };

  dfs(0, "");                                 //Time: 1, Space: _
  return result;
};

console.log(letterCombinations("23"));

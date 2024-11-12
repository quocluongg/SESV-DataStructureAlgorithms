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

  const dfs = (index, string) => {
    if (string.length === digits.length) {
      return result.push(string);
    }

    for (const char of mapping[digits[index]]) {
      dfs(index + 1, string + char);
    }
  };

  dfs(0, "");
  return result;
};

console.log(letterCombinations("23"));

let count3 = 0;

function fullCombination(nums) {
  const dfs = (i, temp) => {
    console.log('i:', i, 'temp:', [...temp]);
    count3++;
    if (i === nums.length) return;
    for (let j = i + 1; j < nums.length; j++) {
      temp.push(nums[j]);
      dfs(j, temp);
      temp.pop();
    }
  };

  for (let i = 0; i < nums.length; i++) {
    dfs(i, [nums[i]]);
  }
}

fullCombination([1, 2, 3]);
console.log('Total Calls (O(n^n)):', count3);

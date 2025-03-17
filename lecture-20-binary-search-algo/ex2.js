const binarySearch = (arr, target, left, right) => {
    if (left > right) return false;
    
    let mid = Math.ceil((left + right) / 2);
    
    if (arr[mid] === target) return true;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
    return binarySearch(arr, target, left, mid - 1);
  };
  
  const checkDoubleRecursive = (arr, index = 0) => {
    if (index >= arr.length) return false;
    
    arr.sort((a, b) => a - b);
    
    const double = arr[index] * 2;
    const half = arr[index] / 2;
    
    if (binarySearch(arr, double, index + 1, arr.length - 1) || 
        binarySearch(arr, half, index + 1, arr.length - 1)) {
      return true;
    }
    
    return checkDoubleRecursive(arr, index + 1);
  };
  
  console.log(checkDoubleRecursive([10, 2, 5, 3, 7]));
  
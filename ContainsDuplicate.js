class ContainsDuplicate {
  // brute-force solution using iteration
  hasDuplicate(nums) {
    let i = 0;
    let j = i + 1;
    while (i < nums.length) {
      while (j < nums.length) {
        if (nums[i] === nums[j]) {
          return true;
        }
        j++;
      }
      i++;
      j = i + 1;
    }
    return false;
  }
}

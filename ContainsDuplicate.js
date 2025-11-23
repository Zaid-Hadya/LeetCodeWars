class ContainsDuplicate {
  // brute-force solution using iteration.
  hasDuplicate0 = (nums) => {
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
  };

  // iteration solution with printing out the duplicated elements.
  hasDuplicate1 = function (nums) {
    let i = 0;
    let j = i + 1;
    let arr = [];
    while (i < nums.length) {
      while (j < nums.length) {
        if (nums[i] === nums[j]) {
          if (!arr.includes(nums[i])) arr.push(nums[i]);
        }
        j++;
      }
      i++;
      j = i + 1;
    }
    return arr;
  };
}

// for testing the code
// const obj1 = new ContainsDuplicate();
// console.log(obj1.hasDuplicate1([1, 3]));

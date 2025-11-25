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

  // Using the filter() and indexOf() method solution. [1 , 2 ,1, 5] i = 0
  hasDuplicate2(nums) {
    const duplicates = nums.filter(
      (item, index) => nums.indexOf(item) === index
    );
  }

  // Set object with Has method solution.
  hasDuplicate3(nums) {
    const unique = new Set();
    const duplicates = [];
    let i = 0;
    while (i < nums.length) {
      if (!unique.has(nums[i])) unique.add(nums[i]);
      else duplicates.push(nums[i]);
      i++;
    }
    return duplicates;
  }
}

// for testing the code
// const obj1 = new ContainsDuplicate();
// console.log(obj1.hasDuplicate3([1, 3]));

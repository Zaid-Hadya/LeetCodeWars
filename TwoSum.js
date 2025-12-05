class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum0(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target && i != j) {
          indices.push(i);
          indices.push(j);
          return indices;
        }
      }
    }
    return nums;
  }
}

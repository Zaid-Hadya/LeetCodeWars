class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  //   Brute-force Solution
  isAnagram0(s, t) {
    s.split("").sort().join("");
    t.split("").sort().join("");
    return s === t;
  }
}

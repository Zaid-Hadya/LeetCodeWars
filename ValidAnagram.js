class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  //   Brute-force Solution
  isAnagram0(s, t) {
    if (s.length !== t.length) return false;
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
  }

  //  Count the frequancy of each char in the strings
  isAnagram1(s, t) {}
}

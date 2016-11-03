/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  var hashMap = {};
  var complement;

  for (var i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in hashMap) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
};

console.log(twoSum2([2, 11, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));

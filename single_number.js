/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce(function(a, b) { return a ^ b }, 0);
};

console.log(singleNumber([ 9, 1, 42, 1, 96, 96, 9 ]));

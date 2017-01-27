/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = nums => nums.reduce((a, b) => a ^ b, 0);

console.log(singleNumber([ 9, 1, 42, 1, 96, 96, 9 ]));

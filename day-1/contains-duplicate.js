/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Method 1
var containsDuplicate = function (nums) {
  let valuesAlreadySeen = []

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return true
    }
    valuesAlreadySeen.push(value)
  }
  return false
};

// Method 2
var containsDuplicate = function (nums) {

  return new Set(nums).size !== nums.length

};


nums = [1, 2, 3, 1];
containsDuplicate(nums);
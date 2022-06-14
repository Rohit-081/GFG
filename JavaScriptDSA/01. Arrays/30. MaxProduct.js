var maxProduct = function(nums) {
    let prod = nums[0];
    let max = prod;
    for(let i = 1; i < nums.length; i++){
        prod = prod * nums[i] > nums[i] ? prod * nums[i] : nums[i];
        max = max > prod ? max : prod 
    }
   return max;
};
var twoSum = function(nums, target) {
    const arr = []; //created empty array
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            const sum = nums[i] + nums[j];
            if(target === sum){
                arr.push(i);
                arr.push(j);
                break;
            }
        }
    }
    return console.log(arr);
};


twoSum([2,7,11,15], 9);
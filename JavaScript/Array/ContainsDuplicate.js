function containsDuplicate(nums){
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
               return console.log(true);
                break;
            }
        }
    }
    return console.log(false);
}


containsDuplicate([1,2,3,1]);
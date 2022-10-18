// first solution

const nums=[7,2,11,23];
const target=9;

var twoSum = function(nums, target) {
   const res = {};
    for(let i=0; i<=nums.length; i++){
        if(res[nums[i]] >= 0){
            return [res[nums[i]], i]
        }
        
        res[target - nums[i]] = i;
    }
};

console.log("first_solution",twoSum)

//second_Solution






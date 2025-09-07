/* 
16. 3Sum Closest
=====================

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/


function threeSumClosest(nums: number[], target: number): number {
    let closetSum = nums[0] + nums[1] + nums[2];
    let minDiff = Math.abs(closetSum - target);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {

                const sum = nums[i] + nums[j] + nums[k];
                const diff = Math.abs(sum - target);

                if (diff < minDiff) {
                    minDiff = diff;
                    closetSum = sum;
                }
            }
        }
    }

    return closetSum;

};
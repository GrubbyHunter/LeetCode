#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <math.h>

using namespace std;
/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子序和
 */

// @lc code=start
class Solution
{
public:
    int maxSubArray(vector<int> &nums)
    {
        int sum = INT32_MIN;
        int currentSum = 0;

        for (int i = 0; i < nums.size(); i++)
        {
            currentSum += nums[i];
            // 当前和 大于 目前统计到的最大和
            if (currentSum > sum)
            {
                sum = currentSum;
            }

            // 当前和小于0，则加上下一个元素，会将与下一个元素的和变小
            // 重置当前值，将当前和设置为0，从下一个位置重新开始计算
            if (currentSum <= 0)
            {
                currentSum = 0;
            }
        }

        return sum;
    }
};
// @lc code=end

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
 * @lc app=leetcode.cn id=376 lang=cpp
 *
 * [376] 摆动序列
 */

// @lc code=start
class Solution
{
public:
    int wiggleMaxLength(vector<int> &nums)
    {
        int result = 1;
        int preDiff = 0;
        int curDiff = 0;
        for (int i = 1; i < nums.size(); i++)
        {
            // i-1这个元素和下一个元素i的差
            curDiff = nums[i] - nums[i - 1];
            // 如果中间的数 - 上一个数大于0 同时 下一个数 - 中间的数小于0，中间的数在波峰，满足条件
            // 中间的数 - 上一个数小于于0 同时 下一个数 - 中间的数大于0，中间的数在波谷，满足条件
            if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0))
            {
                result++;
                preDiff = curDiff;
            }
        }

        return result;
    }
};
// @lc code=end

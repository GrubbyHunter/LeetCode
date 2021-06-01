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
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 */

// @lc code=start
class Solution
{
public:
    bool canJump(vector<int> &nums)
    {
        if (nums.size() == 1)
        {
            return true;
        }
        int size = nums.size();
        int cover = 0;

        for (int i = 0; i <= cover; i++)
        {
            // 当前元素能跳动的范围是他本身的下标+他的值
            // 比如第三个元素为5，name他能跳到 3+5 = 8
            if (nums[i] + i > cover)
            {
                cover = nums[i] + i;
            }

            // cover覆盖的范围已经能到最后一个元素，则能跳到最后
            if (cover >= size - 1)
            {
                return true;
            }
        }

        return false;
    }
};
// @lc code=end

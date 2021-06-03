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
 * @lc app=leetcode.cn id=45 lang=cpp
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
class Solution
{
public:
    int jump(vector<int> &nums)
    {
        int current = 0;
        int next = 0;
        int count = 0;

        // nums.size() - 1,标识走到倒数第二个位置，再走一步一定能走到
        for (int i = 0; i < nums.size() - 1; i += 1)
        {
            next = max(next, nums[i] + i);

            // 下标走到当前的最大范围，则需要步数+1
            // 走到最后nums.size() - 1的位置，如果i != current，表明当前这一步已经走到了，不需要+1
            if (i == current)
            {
                count++;
                // 继续扩大当前的最大范围
                current = next;
            }
        }

        return count;
    }
};
// @lc code=end

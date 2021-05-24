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
 * @lc app=leetcode.cn id=46 lang=cpp
 *
 * [46] 全排列
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result;
    vector<int> current;
    void backtracking(vector<int> &nums, vector<bool> used)
    {
        if (current.size() == nums.size())
        {
            result.push_back(current);
            return;
        }
        // 由于是排序问题，[1,3]和[3,1]是不同的子集，所有不设置startIndex
        // 每次从头开始遍历
        for (int i = 0; i < nums.size(); i++)
        {
            // used记录使用过的元素，使用过就不继续遍历
            // 比如[1,3]，都使用过，下一次就只遍历2，生成[1,3,2]
            if (used[i])
            {
                continue;
            }

            current.push_back(nums[i]);
            used[i] = true;
            backtracking(nums, used);
            used[i] = false;
            current.pop_back();
        }
    }
    vector<vector<int>> permute(vector<int> &nums)
    {
        vector<bool> used(nums.size(), false);

        backtracking(nums, used);
        return result;
    }
};
// @lc code=end

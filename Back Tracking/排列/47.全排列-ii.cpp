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
 * @lc app=leetcode.cn id=47 lang=cpp
 *
 * [47] 全排列 II
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result; // 存放结果
    vector<int> path;
    void backtracking(vector<int> &nums, vector<bool> used)
    {
        if (path.size() == nums.size())
        {
            result.push_back(path);
            return;
        }

        for (int i = 0; i < nums.size(); i++)
        {
            if (used[i])
            {
                continue;
            }

            // nums[i] == nums[i - 1] && used[i - 1] == false 表示同一层有重复的元素
            if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false)
            {
                continue;
            }
            path.push_back(nums[i]);
            used[i] = true;
            backtracking(nums, used);
            used[i] = false;
            path.pop_back();
        }
    }
    vector<vector<int>> permuteUnique(vector<int> &nums)
    {
        vector<bool> used(nums.size(), false);

        // 首先把给nums排序，让其相同的元素都挨在一起。
        sort(nums.begin(), nums.end());
        backtracking(nums, used);

        return result;
    }
};
// @lc code=end

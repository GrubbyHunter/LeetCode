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
 * @lc app=leetcode.cn id=90 lang=cpp
 *
 * [90] 子集 II
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result; // 存放结果
    vector<int> path;
    void backtracking(vector<int> &nums, int startIndex, vector<bool> used)
    {
        result.push_back(path);

        for (int i = startIndex; i < nums.size(); i++)
        {
            if (i > 0 && nums[i - 1] == nums[i] && used[i - 1] == false)
            {
                continue;
            }

            path.push_back(nums[i]);
            used[i] = true;
            // 这里是i+1
            backtracking(nums, i + 1, used);
            used[i] = false;
            path.pop_back();
        }
    }
    vector<vector<int>> subsetsWithDup(vector<int> &nums)
    {

        vector<bool> used(nums.size(), false);
        // 首先把给nums排序，让其相同的元素都挨在一起。
        sort(nums.begin(), nums.end());
        backtracking(nums, 0, used);
        return result;
    }
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=78 lang=cpp
 *
 * [78] 子集
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result; // 存放结果
    vector<int> path;
    void backtracking(vector<int> &nums, int startIndex)
    {
        result.push_back(path);
        // 可不写
        if (startIndex >= nums.size())
        {
            return;
        }

        for (int i = startIndex; i < nums.size(); i++)
        {
            path.push_back(nums[i]);
            backtracking(nums, startIndex + 1);
            path.pop_back();
        }
    }
    vector<vector<int>> subsets(vector<int> &nums)
    {
        result.clear();
        path.clear();
        backtracking(nums, 0);
        return result;
    }
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=216 lang=cpp
 *
 * [216] 组合总和 III
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result;
    vector<int> path;
    void findResult(int k, int n, int startIndex, int sum)
    {
        if (sum == n && path.size() == k)
        {
            result.push_back(path);
            return;
        }

        if (sum > n)
        {
            return;
        }

        for (int i = startIndex; i <= 9; i++)
        {
            path.push_back(i);
            sum += i;

            findResult(k, n, i + 1, sum);

            path.pop_back();
            sum -= i;
        }
    }
    vector<vector<int>> combinationSum3(int k, int n)
    {
        findResult(k, n, 1, 0);
        return result;
    }
};
// @lc code=end

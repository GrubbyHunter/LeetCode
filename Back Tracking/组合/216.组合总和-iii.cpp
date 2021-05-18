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

        // 这里进行修剪
        // path中有path.size()个数，那么还剩 k - path.size()个数
        // k = 4 ，startIndex = 1时候，  9 - (k - path.size()) + 1 = 6
        // 也就是说需要在[1,6]这个区间进行遍历，起始位置startIndex超过6的话，后面的元素加起来都不到k个，4个
        for (int i = startIndex; i <= 9 - (k - path.size()) + 1; i++)
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

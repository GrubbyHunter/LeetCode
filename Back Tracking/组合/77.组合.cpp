#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=77 lang=cpp
 *
 * [77] 组合
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> result;
    vector<int> path;
    void findPath(int n, int k, int startIndex)
    {
        // 数组中的元素数量达到k个，则满足条件，递归停止，并将结果添加到最后的结果集
        if (path.size() == k)
        {
            result.push_back(path);
            return;
        }

        // 这里的循环是横向遍历，将n的数组每个值一次跟后面的元素组合
        for (int i = startIndex; i <= n; i++)
        {
            // 第i个元素
            path.push_back(i);
            // 以及它后面的元素i+1，进行组合
            findPath(n, k, i + 1);
            // 组合完之后进行回溯，将i推出数组，开始统计下一个元素的组合情况
            path.pop_back();
        }
    }
    vector<vector<int>> combine(int n, int k)
    {
        if (n == 0 || k == 0)
        {
            return result;
        }

        findPath(n, k, 1);
        return result;
    }
};
// @lc code=end

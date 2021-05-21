#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=39 lang=cpp
 *
 * [39] 组合总和
 */

// @lc code=start

class Solution
{
public:
    vector<vector<int>> result;
    vector<int> current;
    int sum;
    void findVector(vector<int> &candidates, int target, int startIndex)
    {
        if (sum > target)
        {
            return;
        }
        if (sum == target)
        {
            result.push_back(current);
            return;
        }

        for (int i = startIndex; i < candidates.size(); i++)
        {
            current.push_back(candidates[i]);
            sum += candidates[i];
            findVector(candidates, target, i);
            current.pop_back();
            sum -= candidates[i];
        }
    }
    vector<vector<int>> combinationSum(vector<int> &candidates, int target)
    {

        findVector(candidates, target, 0);
        return result;
    }
};
// @lc code=end

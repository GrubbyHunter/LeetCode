#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>

using namespace std;

/*
 * @lc app=leetcode.cn id=40 lang=cpp
 *
 * [40] 组合总和 II
 */

// @lc code=start

class Solution
{
public:
    vector<vector<int>> result;
    vector<int> current;
    void findVector(vector<int> &candidates, int sum, int target, int startIndex, vector<bool> &used)
    {
        if (sum == target)
        {
            result.push_back(current);
            return;
        }

        for (int i = startIndex; i < candidates.size() && sum + candidates[i] <= target; i++)
        {

            if (i > 0 && candidates[i] == candidates[i - 1] && used[i - i] == false)
            {
                continue;
            }

            sum += candidates[i];
            current.push_back(candidates[i]);
            used[i] = true;
            findVector(candidates, sum, target, i + 1, used);
            used[i] = false;
            sum -= candidates[i];
            current.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int> &candidates, int target)
    {

        vector<bool> used(candidates.size(), false);
        result.clear();
        current.clear();
        sort(candidates.begin(), candidates.end());
        findVector(candidates, 0, target, 0, used);
        return result;
    }
};
// @lc code=end

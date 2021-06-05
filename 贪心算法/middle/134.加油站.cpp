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
 * @lc app=leetcode.cn id=134 lang=cpp
 *
 * [134] 加油站
 */

// @lc code=start
class Solution
{
public:
    int canCompleteCircuit(vector<int> &gas, vector<int> &cost)
    {
        int curSum = 0;
        int min = INT_MAX; // 从起点出发，油箱里的油量最小值

        for (int i = 0; i < cost.size(); i++)
        {
            curSum += gas[i] - cost[i];

            if (min > curSum)
            {
                min = curSum;
            }
        }

        // 总消耗大于总油量，则跑不了一圈
        if (curSum < 0)
        {
            return -1;
        }

        // 从0开始跑一直是正数，则每个阶段都满足，直接从0开始跑就行
        if (min >= 0)
        {
            return 0;
        }

        for (int i = cost.size() - 1; i > 0; i--)
        {
            int rest = gas[i] - cost[i];
            min += rest;

            // 从后往前遍历，如果累积的油量能把这个最大的负数填平
            if (min >= 0)
            {
                // 则从i位置开始跑就行
                return i;
            }
        }

        return -1;
    }
};
// @lc code=end

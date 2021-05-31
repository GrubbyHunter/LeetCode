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
 * @lc app=leetcode.cn id=122 lang=cpp
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        if (prices.size() == 0)
        {
            return 0;
        }
        int sum = 0;
        int prePrice = prices[0];

        // 由于股票第二天才产生收益，所以计算收益从第二天开始
        for (int i = 1; i < prices.size(); i++)
        {
            // 当天减去前一天的价格，就是收益
            int result = prices[i] - prePrice;
            // 收益大于0就进行累加
            if (result > 0)
            {
                sum += result;
            }

            prePrice = prices[i];
        }

        return sum;
    }
};
// @lc code=end

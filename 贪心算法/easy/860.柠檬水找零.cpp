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
 * @lc app=leetcode.cn id=860 lang=cpp
 *
 * [860] 柠檬水找零
 */

// @lc code=start
class Solution
{
public:
    bool lemonadeChange(vector<int> &bills)
    {
        int five = 0;
        int ten = 0;
        int twenty = 0;

        for (int i = 0; i < bills.size(); i++)
        {
            // 5块直接收，记录5块的张数
            if (bills[i] == 5)
            {
                five++;
                continue;
            }

            // 10块直接找回5块
            if (bills[i] == 10)
            {
                // 已经没有5元可以找回
                if (five <= 0)
                {
                    return false;
                }
                ten++;
                five--;
            }

            // 收到20块钱
            if (bills[i] == 20)
            {
                // 找回一个10块和5块，因为10块只能找回给20,5块可以找回给20和10块
                // 优先使用10块
                if (ten > 0 && five > 0)
                {
                    ten--;
                    five--;
                    twenty++;
                }
                // 找回3个5块
                else if (five >= 3)
                {
                    five -= 3;
                    twenty++;
                }
                else
                {
                    return false;
                }
            }
        }

        return true;
    }
};
// @lc code=end

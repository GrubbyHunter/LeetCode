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
 * @lc app=leetcode.cn id=455 lang=cpp
 *
 * [455] 分发饼干
 */

// @lc code=start
class Solution
{
public:
    int findContentChildren(vector<int> &g, vector<int> &s)
    {
        // 先对数组进行排序
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        int num = 0;

        // 空饼干数组处理
        if (s.size() == 0)
        {
            return num;
        }

        // 最大饼干的位置
        int index = s.size() - 1;

        for (int i = g.size() - 1; i >= 0; i--)
        {
            // 从后往前遍历：找到胃口最大小孩的位置
            // 饼干大小 > 小孩胃口，满足条件
            // 继续遍历下一个小孩，index--，去掉刚才已使用的饼干
            if (index >= 0 && s[index] >= g[i])
            {
                num++;
                index--;
            }
        }

        return num;
    }
};
// @lc code=end

#include <iostream>

using namespace std;
/*
 * @lc app=leetcode.cn id=541 lang=cpp
 *
 * [541] 反转字符串 II
 */

// @lc code=start
class Solution
{
public:
    // 反转字符串的函数
    void reverse(string &str, int start, int end)
    {

        for (int i = start, j = end; i < j; i++, j--)
        {
            int temp = str[i];
            str[i] = str[j];
            str[j] = temp;
        }
    }

    string reverseStr(string s, int k)
    {
        int size = s.size();

        for (int i = 0; i < size; i += 2 * k)
        {
            int endSize = size - i;

            if (endSize >= k)
            {
                // 只反转前k个字符
                reverse(s, i, i + k - 1);
            }
            else
            {
                // 反转剩下的全部
                reverse(s, i, size - 1);
            }
        }

        return s;
    }
};
// @lc code=end

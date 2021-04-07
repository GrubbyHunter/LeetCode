#include <vector>
#include <cstdint>
// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;
/*
/*
 * @lc app=leetcode.cn id=344 lang=cpp
 *
 * [344] 反转字符串
 */

// @lc code=start
class Solution
{
public:
    void reverseString(vector<char> &s)
    {
        int size = s.size();

        for (int i = 0, j = size - 1; i <= j; i++, j--)
        {
            int temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    }
};
// @lc code=end

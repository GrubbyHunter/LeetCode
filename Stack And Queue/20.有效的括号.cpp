#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=20 lang=cpp
 *
 * [20] 有效的括号
 */

// @lc code=start
class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> result;

        for (char w : s)
        {
            // 将{ [ (的反括号存入栈
            if (w == '[')
                result.push(']');
            else if (w == '{')
                result.push('}');
            else if (w == '(')
                result.push(')');
            // 输入}])时栈为空，返回false
            else if (result.empty())
                return false;
            // 栈中返回栈顶元素, 如果相等进行去除，不相等直接判断false
            else if (w != result.top())
                return false;
            else
                result.pop();
        }

        return result.empty();
    }
};
// @lc code=end

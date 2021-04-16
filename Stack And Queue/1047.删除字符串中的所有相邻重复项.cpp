/*
 * @lc app=leetcode.cn id=1047 lang=cpp
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
class Solution
{
public:
    string removeDuplicates(string S)
    {
        stack<char> result;

        for (char w : S)
        {
            if (result.empty())
            {
                result.push(w);
                continue;
            }

            if (result.top() == w)
            {
                result.pop();
                continue;
            }

            result.push(w);
        }

        string S1 = "";
        vector<char> cArr;

        // 吐出栈中的元素给cArr
        while (!result.empty())
        {
            cArr.push_back(result.top());
            result.pop();
        }

        // 栈中顺序跟原始字符串是相反的，需要倒序一下
        for (int i = cArr.size() - 1; i >= 0; i--)
        {
            S1 += cArr[i];
        }

        return S1;
    }
};
// @lc code=end

#include <iostream>
#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=242 lang=cpp
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        if (s.size() != t.size())
        {
            return false;
        }

        // 记录每个字母出现次数的数组
        int arr[26] = {0};
        for (int i = 0; i < s.size(); i++)
        {
            // 'a' - 'a' = 0，'b' - 'a' = 1
            // 实际上是ascii码相减，所以可以作为数组下标
            arr[s[i] - 'a']++;
            arr[t[i] - 'a']--;
        }

        for (int i = 0; i < 26; i++)
        {
            if (arr[i] != 0)
            {
                return false;
            }
        }

        return true;
    }
};
// @lc code=end

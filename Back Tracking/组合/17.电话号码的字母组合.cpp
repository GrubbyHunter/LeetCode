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
 * @lc app=leetcode.cn id=17 lang=cpp
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
class Solution
{
public:
    vector<string> result;
    string s;
    // 数据源map,使用map是为了每次方便取值
    vector<string> stringArr = {
        "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    void findCombinations(string digits, int startIndex)
    {
        if (s.size() == digits.size())
        {
            result.push_back(s);
            return;
        }

        int digit = digits[startIndex] - '0'; // 将index指向的数字转为int
        // 当前正在遍历的按键字符串
        string letter = stringArr[digit];

        for (int i = 0; i < letter.size(); i++)
        {
            s.push_back(letter[i]);
            findCombinations(digits, startIndex + 1);
            s.pop_back();
        }
    }
    vector<string> letterCombinations(string digits)
    {
        if (digits.size() == 0)
        {
            return result;
        }
        // 需要进行暴力搜索的数据源
        findCombinations(digits, 0);
        return result;
    }
};
// @lc code=end

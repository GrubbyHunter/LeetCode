/*
 * @lc app=leetcode.cn id=383 lang=cpp
 *
 * [383] 赎金信
 */

// @lc code=start
class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        unordered_map<char, int> ransomMap;
        // map记录单个字符出现的次数
        for (char w : ransomNote)
        {
            ransomMap[w]++;
        }

        // 单个字符再次出现次数-1
        for (char w : magazine)
        {
            if (ransomMap.find(w) != ransomMap.end())
            {
                ransomMap[w]--;
            }
        }

        // 最后map依然处在次数大于1的字符，说明没法满足
        for (auto iter = ransomMap.begin(); iter != ransomMap.end(); ++iter)
        {
            if (iter->second > 0)
            {
                return false;
            }
        }

        return true;
    }
};
// @lc code=end

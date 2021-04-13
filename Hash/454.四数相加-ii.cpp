/*
 * @lc app=leetcode.cn id=454 lang=cpp
 *
 * [454] 四数相加 II
 */

// @lc code=start
class Solution
{
public:
    int fourSumCount(vector<int> &nums1, vector<int> &nums2, vector<int> &nums3, vector<int> &nums4)
    {
        unordered_map<int, int> result;
        int count = 0;

        // map中key为a+b的和，value记录a+b的和出现的次数
        for (int a : nums1)
        {
            for (int b : nums2)
            {
                result[a + b]++;
            }
        }

        for (int c : nums3)
        {
            for (int d : nums4)
            {
                auto iter = result.find(0 - (c + d));

                if (iter != result.end())
                {
                    count += iter->second;
                }
            }
        }

        return count;
    }
};
// @lc code=end

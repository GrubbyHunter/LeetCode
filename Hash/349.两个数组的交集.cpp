/*
 * @lc app=leetcode.cn id=349 lang=cpp
 *
 * [349] 两个数组的交集
 */

// @lc code=start
class Solution
{
public:
    vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
    {
        // 保存交集的结果
        unordered_set<int> resultSet;
        unordered_set<int> targetSet(nums1.begin(), nums1.end()); // nums1转化为unordered_set
        for (int num : nums2)
        {
            // find方法找到的话返回一个指向该元素的正向迭代器；反之，则返回一个指向容器中最后一个元素之后位置的迭代器
            if (targetSet.find(num) != targetSet.end())
            {
                resultSet.insert(num);
            }
        }

        return vector<int>(resultSet.begin(), resultSet.end());
    }
};
// @lc code=end

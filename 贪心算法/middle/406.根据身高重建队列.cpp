/*
 * @lc app=leetcode.cn id=406 lang=cpp
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
class Solution
{
public:
    static bool cmp(const vector<int> a, const vector<int> b)
    {
        if (a[0] == b[0])
            return a[1] < b[1];
        return a[0] > b[0];
    }
    vector<vector<int>> reconstructQueue(vector<vector<int>> &people)
    {
        // 先通过身高对数组进行排序
        sort(people.begin(), people.end(), cmp);
        vector<vector<int>> que;

        for (int i = 0; i < people.size(); i++)
        {
            // 需要插入到people的下标位置
            int index = people[i][1];

            // 插入到index位置，由于是有序数组，右所以插进去，前面肯定有index个比他大的元素，符合条件
            que.insert(que.begin() + index, people[i]);
        }

        return que;
    }
};
// @lc code=end

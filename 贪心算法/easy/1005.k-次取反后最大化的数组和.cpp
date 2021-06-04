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
 * @lc app=leetcode.cn id=1005 lang=cpp
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
class Solution
{
public:
    // 排序函数，使用绝对值就行排序
    static bool cmp(int a, int b)
    {
        return abs(a) > abs(b);
    }
    int largestSumAfterKNegations(vector<int> &nums, int k)
    {
        int sum = 0;
        int size = nums.size();
        // 先通过绝对值排序
        sort(nums.begin(), nums.end(), cmp);

        for (int i = 0; i < size; i++)
        {
            // 优先将加大的负数转为正，同时消费k的数量：k--
            if (nums[i] < 0 && k != 0)
            {
                k--;
                nums[i] = abs(nums[i]);
            }

            sum += nums[i];
        }

        // 如果k依然存在，k是偶数，结果不变
        // k是奇数
        if (k % 2 != 0)
        {
            // 需要先减掉最后一个数
            sum -= nums[size - 1];
            // 然后将最后一个数的反向值
            sum -= nums[size - 1];
        }
        return sum;
    }
};
// @lc code=end

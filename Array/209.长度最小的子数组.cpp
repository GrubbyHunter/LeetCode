#include <vector>
#include <cstdint>
// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;
/*
 * @lc app=leetcode.cn id=209 lang=cpp
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
class Solution
{
public:
    int minSubArrayLen(int target, vector<int> &nums)
    {
        int startIndex = 0; // 滑动窗口左边下标
        int sum = 0;        // 数据累加的和
        int size = nums.size();
        int minSize = size + 1; // 当前最小长度，默认为数组长度

        // 外部循环移动窗口右侧
        for (int j = 0; j < size; j++)
        {
            sum += nums[j];

            // 超过目标值，标识符合要求，需要移动窗口左侧
            while (sum >= target)
            {
                int length = j - startIndex + 1;
                // 跟之前的最小长度比对，获取最小长度
                minSize = length < minSize ? length : minSize;
                // 移动左侧窗口之前减去当前左侧窗口元素的值
                sum -= nums[startIndex];
                // 移动左侧窗口
                startIndex++;
            }
        }

        // minSize没有变，标识没有符合要求的，直接返回0
        return minSize == size + 1 ? 0 : minSize;
    }
};
// @lc code=end

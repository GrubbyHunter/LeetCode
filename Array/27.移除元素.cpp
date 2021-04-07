#include <vector>

// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;
/*
 * @lc app=leetcode.cn id=27 lang=cpp
 *
 * [27] 移除元素
 */

// @lc code=start
class Solution
{
public:
    int removeElement(vector<int> &nums, int val)
    {
        int slowIndex = 0;
        int fastIndex = 0;
        int size = nums.size();
        // 采用双指针
        while (fastIndex < size)
        {
            // 如果后一个数等于目标值，那就继续寻找下一个数
            if (nums[fastIndex] == val)
            {
                fastIndex += 1;
            }
            else
            {
                // 后一个数不等于目标值，则符合条件，移动到前面
                nums[slowIndex] = nums[fastIndex];
                // 两个指针都往前走一步，继续寻找下一个符合条件的元素，然后移动到数组前面
                fastIndex += 1;
                slowIndex += 1;
            }
        }

        // 慢指针之前的数都是符合条件的数，直接返回下标即可
        return slowIndex;
    }
};
// @lc code=end

#include <vector>

// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;
/*
 * @lc app=leetcode.cn id=35 lang=cpp
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/*
 * @lc app=leetcode.cn id=1 lang=cpp
 *
 * [1]两数之和
 */

// @lc code=start
// vector更接近js中的数组，可以动态删除和扩展，而array是不支持的
// 数组的元素是不能删的，只能覆盖
// & 参数加上&，表示为引用传递，输出&变量名，可以打印变量在内存中的地址
class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int left = 0;
        int right = nums.size() - 1;

        while (left <= right)
        {
            //由于middle是int类型， 这里c++中会自动取整，去掉小数部分
            int middle = (left + right) / 2;
            if (nums[middle] > target)
            {
                right = middle - 1; // 目标在左边区域
            }
            else if (nums[middle] < target)
            {
                left = middle + 1; // 目标在右边区域
            }
            else
            {
                // 目标值在数组所有元素之前  index = 0
                // 目标值等于数组中某一个元素  return middle;
                return middle;
            }
        }

        // 目标值插入数组中的位置 [left, right]，return  right + 1
        // 目标值在数组所有元素之后的情况 [left, right]， return right + 1
        return right + 1;
    }
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=15 lang=cpp
 *
 * [15] 三数之和
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        vector<vector<int>> result;
        // 先对数组进行快速排序
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i; j < nums.size(); j++)
            {
                if (nums[i] > nums[j])
                {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }

        // nums[i] + nums[left] + nums[right] = 0
        for (int i = 0; i < nums.size(); i++)
        {
            // 第一个数大于0，则后面的数加起来更不可能 == 0，直接返回结果
            if (nums[i] > 0)
            {
                return result;
            }
            // 去重
            if (i > 0 && nums[i] == nums[i - 1])
            {
                continue;
            }

            int left = i + 1;
            int right = nums.size() - 1;

            while (left < right)
            {
                if (nums[i] + nums[left] + nums[right] == 0)
                {
                    // 符合条件
                    result.push_back({nums[i], nums[left], nums[right]});

                    // 找到之后继续对双指针去重
                    // 比如0022，实际上找到的是中间的02作为左右指针的起始位置
                    while (right > left && nums[right] == nums[right - 1])
                        right--;
                    while (right > left && nums[left] == nums[left + 1])
                        left++;
                    // 左右各自往中间走一步
                    left++;
                    right--;
                }
                else if (nums[i] + nums[left] + nums[right] < 0)
                {
                    // sum<0，移动左边
                    left++;
                }
                else
                {
                    // sum>0，移动右边
                    right--;
                }
            }
        }

        return result;
    }
};
// @lc code=end

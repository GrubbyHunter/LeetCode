/*
 * @lc app=leetcode.cn id=18 lang=cpp
 *
 * [18] 四数之和
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> fourSum(vector<int> &nums, int target)
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

        // nums[i] + nums[j] + nums[left] + nums[right] = target
        for (int i = 0; i < nums.size(); i++)
        {
            // 第一个数大于0，则后面的数加起来更不可能 == 0，直接返回结果
            if (i > 0 && nums[i] == nums[i - 1])
            {
                continue;
            }

            for (int j = i + 1; j < nums.size(); j++)
            {
                // 去重
                if (j > i + 1 && nums[j] == nums[j - 1])
                {
                    continue;
                }

                int left = j + 1;
                int right = nums.size() - 1;

                while (left < right)
                {
                    if (nums[i] + nums[j] + nums[left] + nums[right] == target)
                    {
                        // 符合条件
                        result.push_back({nums[i], nums[j], nums[left], nums[right]});

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
                    else if (nums[i] + nums[j] + nums[left] + nums[right] < target)
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
        }

        return result;
    }
};
// @lc code=end

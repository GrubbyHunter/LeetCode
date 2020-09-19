# 移动零

> https://leetcode-cn.com/problems/move-zeroes/description/  
> 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

> 示例:  
> 输入: [0,1,0,3,12]  
> 输出: [1,3,12,0,0]

> 说明:  
> 必须在原数组上操作，不能拷贝额外的数组。  
> 尽量减少操作次数。

## 解法
> 使用 j 记录之前的 0 的位置，如果后面的数字不等于 0，则将后面的数字与 0 互换位置，然后 j++，知道换完所有的 0，这样的复杂度为 O(n)

```c++
class Solution
{
public:
  void moveZeroes(vector<int> &nums)
  {
    if (nums.size() == 0)
    {
      return;
    }
    int size = nums.size(), temp;
    int j = 0;

    for (int i = 0; i < size; i++)
    {
      if (nums[i] != 0)
      {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        j++;
      }
    }
  }
};

```

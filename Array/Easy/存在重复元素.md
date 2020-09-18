# 存在重复元素

> https://leetcode-cn.com/problems/contains-duplicate/description/  
> 给定一个整数数组，判断是否存在重复元素。  
> 如果任何值在数组中出现至少两次，函数返回 true。  
> 如果数组中每个元素都不相同，则返回 false。

> 示例 1:  
> 输入: [1,2,3,1]  
> 输出: true

> 示例 2:  
> 输入: [1,2,3,4]  
> 输出: false

> 示例  3:  
> 输入: [1,1,1,3,3,4,3,2,4,2]  
> 输出: true

## 解法

> 1、使用set记录key，然后遍历一次，key已经存在则有重复    
> 2、先排序，然后按照顺序遍历一次即可。

```c++
class Solution
{
public:
  bool containsDuplicate(vector<int> &nums)
  {
    // unordered_set key是唯一的
    unordered_set<int> set;
    int size = nums.size();

    for (int i = 0; i < size; i++)
    {
      if (set.count(nums[i]) > 0)
      {
        return true;
      }

      set.insert(nums[i]);
    }

    return false;
  }
};
```

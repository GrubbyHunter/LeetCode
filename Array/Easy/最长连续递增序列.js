
# 最长连续递增序列

> 给定一个未经排序的整数数组，找到最长且连续的的递增序列，并返回该序列的长度。    
https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/    
> 示例 1:    
输入: [1,3,5,4,7]    
输出: 3    
解释: 最长连续递增序列是 [1,3,5], 长度为3。    
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。     

> 示例 2:    
输入: [2,2,2,2,2]    
输出: 1    
解释: 最长连续递增序列是 [2], 长度为1。    


## 解法

> maxSize记录之前的最大长度，currentMaxSize记录当前的最大长度，如果nums[i - 1] >= nums[i]，那么currentMaxSize清零，maxSize的值取currentMaxSize和maxSize之间较大的那一个。

```c++
class Solution
{
public:
  int findLengthOfLCIS(vector<int> &nums)
  {
    int maxSize = 1;
    int currentMaxSize = 1;

    if(nums.size() == 0){
        return 0;
    }

    for (int i = 1; i < nums.size(); i++)
    {
      currentMaxSize = nums[i - 1] >= nums[i] ? 1 : currentMaxSize + 1;
      maxSize = maxSize > currentMaxSize ? maxSize : currentMaxSize;
    }

    return maxSize;
  }
};

```

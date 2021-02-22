# 旋转数组

> https://leetcode-cn.com/problems/rotate-array/description/  
> 给定一个数组，将数组中的元素向右移动  k  个位置，其中  k  是非负数。

> 示例 1:  
> 输入: [1,2,3,4,5,6,7] 和 k = 3  
> 输出: [5,6,7,1,2,3,4]  
> 解释:  
> 向右旋转 1 步: [7,1,2,3,4,5,6]  
> 向右旋转 2 步: [6,7,1,2,3,4,5]  
> 向右旋转 3 步: [5,6,7,1,2,3,4]

> 示例  2:  
> 输入: [-1,-100,3,99] 和 k = 2  
> 输出: [3,99,-1,-100]  
> 解释:  
> 向右旋转 1 步: [99,-1,-100,3]  
> 向右旋转 2 步: [3,99,-1,-100]

> 说明: 要求使用空间复杂度为  O(1) 的原地算法。

## 解法一

> 直接遍历 k 次数组，然后每次移除的尾部元素，然后再将尾部元素添加到第一位，复杂度为 O(n)

```c++
class Solution
{
public:
  void rotate(vector<int> &nums, int k)
  {
    int temp = 0;
    int size = nums.size();
    // 这里防止K比数组的长度还大
    k = k % size;

    while (k > 0)
    {
      // 获取最后一个元素
      temp = nums[size - 1];
      // 删除最后一个元素
      nums.pop_back();
      // 最后一个元素插入到第一个元素的位置
      nums.insert(nums.begin(), temp);
      k--;
    }
  }
};
```

## 解法 2

> 这里我们先创建一个翻转函数 reverse，将一个数组进行翻转，比如[1,2,3]，翻转之后变成[3,2,1]。  
> 然后我们分三步进行：  
> 比如[1,2,3,4,5]，k=2，那么第一步我们将整个数组反转，变成[5,4,3,2,1]。  
> 然后将前面的一段恢复原来的顺序[5,4]变成[4,5]  
> 最后将后一段恢复原来的顺序[3,2,1]变成[1,2,3]，最终结果就变成了[4,5,1,2,3]  
> 整个复杂度为 O(n)

```c++
class Solution
{
public:
  void rotate(vector<int> &nums, int k)
  {
        //采用反转
        int length=size(nums);
        k%=size(nums);
        reverse(&nums[0],&nums[length]);
        reverse(&nums[0],&nums[k]);
        reverse(&nums[k],&nums[length]);
  }
};
```

# 两数之和

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。  
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素  
> 给定 nums = [2, 7, 11, 15], target = 9  
> 因为 nums[0] + nums[1] = 2 + 7 = 9  
> 所以返回 [0, 1]

## 解法一

> 这里 Map 也可以使用对象代替，主要用来记录已经访问过的元素，然后使用 target 减去后续元素的差值
在 Map 寻找是否存在这个差值，在的话则成立，直接返回  
> 这里的复杂度为 `O(n)`，利用 `Map` 的特性取值的复杂度为O(1)

```c++
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution
{
public:
  // vector<int>& nums是引用传递，vertor<int> nums是值传递
  vector<int> twoSum(vector<int> &nums, int target)
  {
    unordered_map<int, int> map; //建立hash表存放数组元素
    vector<int> result(2);       // 建立两位数的数组返回结果
    int length = nums.size();

    if (length == 0)
    {
      return result;
    }

    // 使用map记录下标和value
    for (int i = 0; i < length; i++)
    {
      map[nums[i]] = i;
    }

    for (int i = 0; i < length; i++)
    {
      // 前面一个条件表示map中存在值，应为map中取值的复杂度为O(1)，这里采用内存空间换时间的做法
      // 后面一个条件表示符合条件的元素不能是自己本身，比如6 - 3 = 3，实际上是存在3，但是只有一个3，不符合条件
      if (map.count(target - nums[i]) > 0 && map[target - nums[i]] != i)
      {
        result[0] = i;
        result[1] = map[target - nums[i]];
        break;
      }
    }

    return result;
  }
};
```

## 解法二

> 这里需要嵌套遍历，暴力破解，所以复杂度为 O(n^2)，这里从第一个元素开始，然后在第一个元素以后到最后这个范围查找是否存在满足条件的值，这个比较容易理解，但是复杂度较高。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let tempArray = [];
  let length = nums.length;

  for (var i = 0; i < length - 1; i++) {
    for (var j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

## 回文数

> https://leetcode-cn.com/problems/palindrome-number/description/

> 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

> 示例 1:  
> 输入: 121  
> 输出: true

> 示例  2:
> 输入: -121  
> 输出: false  
> 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

> 示例 3:  
> 输入: 10  
> 输出: false  
> 解释: 从右向左读, 为 01 。因此它不是一个回文数。

> 进阶:
> 你能不将整数转为字符串来解决这个问题吗？

### 解法

> 这里由于不能使用string，使用div记录10的次幂数相当于记录数字的位数，例如12345，div=10000 既10*5，相当于有5位     
> 因为每次比较完头和尾都去掉了，所以div / 100。对半的话，圈复杂度为O(N)    
> 特别注意如果是10002201这种，去掉头1之后变成了0开头，想当与0002201，既2201，这时候2201%1000000还是等于0，可以理解为取的第二位的这个0来作比较。

```c++
class Solution
{
public:
  bool isPalindrome(int x)
  {
    int begin, end;

    if (x < 0)
    {
      return false;
    }

    int div = 1;
    // 因为不使用string，这里的累积相乘相当于记录数字的位数
    // 1234,div就等于1000
    while (x / div >= 10)
    {
      div *= 10;
    }

    while (x > 0)
    {
      // 头部数字
      int left = x / div;
      // 尾部数字
      int right = x % 10;
      // 不相等既不是回文数字
      if (left != right)
      {
        return false;
      }

      // 相等的话，去掉头部数字和尾部数字，再比较中间的部分
      x = (x % div) / 10;
      // div的话除以100，相当于自动减两位
      div /= 100;
    }

    return true;
  }
};

```

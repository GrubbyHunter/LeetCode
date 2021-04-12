/*
 * @lc app=leetcode.cn id=202 lang=cpp
 *
 * [202] 快乐数
 */

// @lc code=start
class Solution
{
public:
    // 求和
    int getSum(int n)
    {
        int sum = 0;

        while (n > 0)
        {
            int singleNum = n % 10;
            n = n / 10;
            sum += singleNum * singleNum;
        }

        return sum;
    }

    bool isHappy(int n)
    {
        unordered_set<int> result;

        int sum = getSum(n);
        // 和 != 1，表示需要继续往下计算
        while (sum != 1)
        {
            // 和已经存在，说明之前已经生成过
            // 一段循环之后继续生成这个结果，永远不可能是快乐数
            if (result.find(sum) != result.end())
            {
                return false;
            }
            // 求和结果追加到set
            result.insert(sum);
            // 计算新结果
            sum = getSum(sum);
        }

        return true;
    }
};
// @lc code=end

#include <vector>
#include <queue>

using namespace std;
/*
 * @lc app=leetcode.cn id=239 lang=cpp
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class Solution
{
public:
    deque<int> que;
    // 每次弹出的时候，比较当前要弹出的数值是否等于队列出口元素的数值，如果相等则弹出。
    // 同时pop之前判断队列当前是否为空。
    void pop(int value)
    {
        if (!que.empty() && value == que.front())
        {
            que.pop_front();
        }
    }
    // 如果push的数值大于入口元素的数值，那么就将队列后端的数值弹出，直到push的数值小于等于队列入口元素的数值为止。
    // 这样就保持了队列里的数值是单调从大到小的了。
    void push(int value)
    {
        while (!que.empty() && value > que.back())
        {
            que.pop_back();
        }
        que.push_back(value);
    }
    // 查询当前队列里的最大值 直接返回队列前端也就是front就可以了。
    int front()
    {
        return que.front();
    }

    vector<int> maxSlidingWindow(vector<int> &nums, int k)
    {
        int i = 0;
        // 将前k个元素放入队列并进行排序
        while (i < k)
        {
            push(nums[i]);
            i++;
        }

        vector<int> result;
        // 获取前k个数中最大的数
        result.push_back(que.front());

        for (int i = 0; i < nums.size() - k; i++)
        {
            // 推入右侧的数进行重拍
            push(nums[k + i]);
            // 推出左侧的数
            pop(nums[i]);

            result.push_back(que.front());
        }

        return result;
    }
};
// @lc code=end

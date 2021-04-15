#include <stack>

using namespace std;
/*
 * @lc app=leetcode.cn id=232 lang=cpp
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue
{
public:
    stack<int> stIn;
    stack<int> stOut;
    /** Initialize your data structure here. */
    MyQueue()
    {
    }

    /** Push element x to the back of queue. */
    void push(int x)
    {
        // 输入保存元素
        stIn.push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    int pop()
    {
        // 反转输入栈，记录到输出栈
        if (stOut.empty())
        {
            while (!stIn.empty())
            {
                stOut.push(stIn.top());
                stIn.pop();
            }
        }

        int result = stOut.top();
        stOut.pop();

        return result;
    }

    /** Get the front element. */
    int peek()
    {
        int result = this->pop();
        stOut.push(result);

        return result;
    }

    /** Returns whether the queue is empty. */
    bool empty()
    {
        return stOut.empty() && stIn.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
// @lc code=end

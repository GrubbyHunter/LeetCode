#include <queue>
using namespace std;
/*
 * @lc app=leetcode.cn id=225 lang=cpp
 *
 * [225] 用队列实现栈
 */

// @lc code=startclass MyStack
class MyStack
{
public:
    queue<int> qStart;
    queue<int> qEnd;
    /** Initialize your data structure here. */
    MyStack()
    {
    }

    /** Push element x onto stack. */
    void push(int x)
    {
        qStart.push(x);
    }

    /** Removes the element on top of the stack and returns that element. */
    int pop()
    {
        int size = qStart.size();

        // 遍历qStart，直到找到他的最后一个，最后一个不进行pop去除，直接返回
        while (size > 1)
        {
            qEnd.push(qStart.front());
            qStart.pop();
            size--;
        }

        int result = qStart.front();
        qStart = qEnd; // 重新将新队列赋值给qStart

        // 清空que2
        while (!qEnd.empty())
        {
            qEnd.pop();
        }
        return result;
    }

    /** Get the top element. */
    int top()
    {
        return qStart.back();
    }

    /** Returns whether the stack is empty. */
    bool empty()
    {
        return qStart.empty();
    }
};
/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
// @lc code=end

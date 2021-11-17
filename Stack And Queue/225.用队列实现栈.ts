/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    arr: any
    constructor() {
        this.arr = []
    }
    // 将元素 x 压入栈顶
    push(x: number): void {
        // 放在数组头部
        this.arr = [x].concat(this.arr)
    }
    // 移除并返回栈顶元素
    pop(): number {
        // 返回头部元素
        return this.arr.shift()
    }
    // 返回栈顶元素
    top(): number {
        if (this.empty()) {
            return null
        }

        return this.arr[0]
    }
    // 如果栈是空的，返回 true ；否则，返回 false 。
    empty(): boolean {
        return this.arr.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end


/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    arr: any

    constructor() {
        this.arr = []
    }
    // 将元素 x 推到队列的末尾
    push(x: number): void {
        // 放入数组的尾部
        this.arr.push(x)
    }
    // 从队列的开头移除并返回元素
    pop(): number {
        // 移除数组头部元素，也就是先放进来的元素
        return this.arr.shift()
    }
    // 返回队列开头的元素
    peek(): number {
        if (this.empty()) {
            return null
        }

        // 移除数组头部元素，也就是先放进来的元素
        return this.arr[0]
    }
    //如果队列为空，返回 true ；否则，返回 false
    empty(): boolean {
        return this.arr.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end


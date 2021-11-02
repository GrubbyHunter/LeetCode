/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
class MyLinkedList {
    head: any

    constructor() {
        this.head = {
            next: null,
            val: NaN
        }
    }

    // 获取链表中第 index 个节点的值。如果索引无效，则返回-1
    get(index: number): number {
        let current = this.head

        if (index < 0) {
            return -1
        }

        while (current.next) {
            // index 等于 0, 表示找到第n个元素
            if (index === 0) {
                // 终止
                return current.val
            }

            current = current.next
            index--
        }

        // 链表遍历完成，但是index不等于0，说明越界超过长度，直接返回-1
        if (index > 0) {
            return -1
        }


        return isNaN(current.val) ? -1 : current.val
    }

    // 在链表的第一个元素之前添加一个值为 val 的节点。
    // 插入后，新节点将成为链表的第一个节点
    addAtHead(val: number): void {
        // 链表中没有元素
        if (isNaN(this.head.val)) {
            this.head = {
                next: null,
                val
            }
            return
        }

        // 新建头指针
        const current = {
            val,
            next: this.head
        }

        // 指向之前的链表
        this.head = current
    }

    // 将值为 val 的节点追加到链表的最后一个元素。
    addAtTail(val: number): void {
        let current = this.head

        if (isNaN(this.head.val)) {
            this.head = {
                next: null,
                val
            }
            return
        }

        // 查找最后一个元素
        while (current.next) {
            current = current.next
        }

        // 最后一个元素的指针指向新节点
        current.next = {
            val,
            next: null
        }
    }

    // 在链表中的第 index 个节点之前添加值为 val  的节点。
    // 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
    // 如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
    addAtIndex(index: number, val: number): void {
        let current = this.head

        // 插入头部
        if (index <= 0) {
            this.addAtHead(val)
            return
        }

        // 插入尾部
        if (this.get(index) == -1) {
            // 如果下标越界，但是链表中有元素才进行插入
            if (!isNaN(this.head.val)) {
                this.addAtTail(val)
            }
            return
        }

        while (current.next) {
            // index 等于 1, 1表示找到第n个元素的前一个元素
            if (index === 1) {
                // 新建节点
                const newNode = {
                    val,
                    next: current.next
                }

                //在他后面插入新节点
                current.next = newNode
                // 终止
                return
            }

            current = current.next
            index--
        }


        // index > 0，表明长度越界，不进行插入
        // if (index > 0) {
        //     return
        // }

        // 当前current为最后一个节点，插入到最后一个节点后面
        current.next = {
            val,
            next: null
        }
    }

    // 如果索引 index 有效，则删除链表中的第 index 个节点。
    deleteAtIndex(index: number): void {
        let current = this.head

        // 插入头部
        if (index < 0) {
            return
        }

        if (index === 0) {
            // 有元素
            if (current.next) {
                // 删除第一个元素
                current = current.next
                this.head = current
            } else {
                // 没有元素，清空头部
                this.head = {
                    next: null,
                    val: NaN
                }
            }

            // 无元素，无需处理，直接return终止
            return
        }

        while (current.next) {
            // index 等于 1, 表示找到第n个元素的前一个元素
            if (index === 1) {
                // 删除current.next这个节点
                current.next = current.next.next
                // 终止
                return
            }

            current = current.next
            index--
        }

        // 程序没有终止，表明长度越界，不处理即可
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end


/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
// 自定义双向链表
class LinkNode {
    key: number;
    val: number;
    pre: LinkNode | null;
    next: LinkNode | null;
    constructor(key?: number, val?: number, pre?: LinkNode | null, next?: LinkNode | null) {
        this.key = key
        this.val = val
        this.pre = pre
        this.next = next
    }
}

class LRUCache {
    private length: number; // 容量
    private map: any; // 存储空间
    private firstNode: any;
    private lastNode: any;
    constructor(capacity: number) {
        this.length = capacity
        this.map = {}
        // 初始化双链表
        this.firstNode = new LinkNode()
        this.lastNode = new LinkNode()
        this.firstNode.next = this.lastNode
        this.lastNode.pre = this.firstNode
    }

    get(key: number): number {
        let srtKey = key.toString()

        // 不存在
        if (!this.map[srtKey]) {
            return -1
        }
        // 找到节点
        let node = this.map[srtKey]

        // 当前节点脱离双链表
        let preNode = node.pre
        let nextNode = node.next
        preNode.next = nextNode
        nextNode.pre = preNode

        // 节点插入到双链表最前面
        node.next = this.firstNode.next
        node.pre = this.firstNode
        this.firstNode.next.pre = node
        this.firstNode.next = node

        return node.val
    }

    put(key: number, value: number): void {
        let srtKey = key.toString()
        // 已存在节点，更新节点的值
        if (this.map[srtKey]) {

            let node = this.map[srtKey]
            node.val = value

            // 当前节点脱离双链表
            let preNode = node.pre
            let nextNode = node.next
            preNode.next = nextNode
            nextNode.pre = preNode

            // 节点插入到双链表最前面
            node.next = this.firstNode.next
            node.pre = this.firstNode
            this.firstNode.next.pre = node
            this.firstNode.next = node
            return
        }

        // 新节点放入内存
        let node = new LinkNode(key, value)
        this.map[srtKey] = node

        // 插入到双链表最前面
        node.next = this.firstNode.next
        node.pre = this.firstNode
        this.firstNode.next.pre = node
        this.firstNode.next = node

        // 内存够用
        if (this.length !== 0) {
            // 内存-1
            this.length -= 1
            return
        }

        // 内存不足
        let removeNode = this.lastNode.pre
        let removeKey = removeNode.key
        // 删除双链表最后一个节点
        let preNode = removeNode.pre
        preNode.next = this.lastNode
        this.lastNode.pre = preNode

        // 在map中删除
        delete this.map[removeKey.toString()]
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


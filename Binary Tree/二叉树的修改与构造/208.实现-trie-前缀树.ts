/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class TrieNode {
    // 一个有26个子节点（26个字母）的树
    children: TrieNode[] | []
    val: string | null
    isEnd: boolean // 判断是否叶子结点，也就是一个单词的结尾
    constructor(val?: string) {
        this.children = new Array(26)
        this.val = val || null
        this.isEnd = false
    }
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let temp = this.root

        for (let i = 0; i < word.length; i++) {
            // 下标
            let index = word[i].charCodeAt(0) - 97
            // 当前字母不存在，将当前字母在当前节点生成一个新的子节点
            if (!temp.children[index]) {
                temp.children[index] = new TrieNode(word[i])
            }
            // 当前字母作为temp，继续遍历下一个字母
            temp = temp.children[index]

        }
        // 插入一个单词，将他的结尾标记一下
        temp.isEnd = true
    }

    search(word: string): boolean {
        let temp = this.root

        for (let i = 0; i < word.length; i++) {
            // 下标
            let index = word[i].charCodeAt(0) - 97
            // 当前字母不存在，将当前字母在当前节点生成一个新的子节点
            if (!temp.children[index]) {
                return false
            } else {
                // 当前字母作为temp，继续遍历下一个字母
                temp = temp.children[index]
            }
        }
        // search的话，找到最后，一定要是最后一个字母，才算找到
        return temp.isEnd
    }

    startsWith(prefix: string): boolean {
        let temp = this.root

        for (let i = 0; i < prefix.length; i++) {
            // 下标
            let index = prefix[i].charCodeAt(0) - 97
            // 当前字母不存在，将当前字母在当前节点生成一个新的子节点
            if (!temp.children[index]) {
                return false
            } else {
                // 当前字母作为temp，继续遍历下一个字母
                temp = temp.children[index]
            }
        }
        // 前缀的话，只要遍历完成计算找到
        return true
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


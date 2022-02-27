// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
class TreeNode {
  // 一个有26个子节点（26个字母）的树
  children: TreeNode[] | []
  val: string | null
  isEnd: boolean // 判断是否叶子结点，也就是一个单词的结尾
  constructor(val?: string) {
    this.children = new Array(26)
    this.val = val || null
    this.isEnd = false
  }
}

class Trie {
  private root: TreeNode
  constructor() {
    this.root = new TreeNode()
  }

  insert(word: string): void {
    let temp = this.root

    for (let i = 0; i < word.length; i++) {
      // 下标
      let index = word[i].charCodeAt(0) - 97
      // 当前字母不存在，将当前字母在当前节点生成一个新的子节点
      if (!temp.children[index]) {
        temp.children[index] = new TreeNode(word[i])
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
// @lc code=end
let a = new Trie()
a.insert("app")
a.search("app")
a.startsWith("ap")
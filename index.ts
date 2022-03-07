// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  // 用队列进行广地递归
  let queue = [root]
  let result: any = []

  // 记录顺序变量
  let isLeftToRight = false
  let i = 0;

  while (queue.length > i) {

    let child = []
    let newQueue = queue.slice(i)
    // 遍历一层
    while (newQueue.length > 0) {
      // 从左到右的话，从头部开始取元素
      let current = isLeftToRight ? newQueue.shift() : newQueue.pop()
      i++
      if (!current) {
        continue
      }

      // push当前节点到子数组
      child.push(current.val)
      queue.push(current.left)
      queue.push(current.right)
    }

    if (child.length > 0) {
      result.push(child)
    }

    isLeftToRight = !isLeftToRight
  }

  return result
};
zigzagLevelOrder(new TreeNode(1,
  new TreeNode(2, new TreeNode(4), null),
  new TreeNode(3, null, new TreeNode(5))))
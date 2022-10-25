/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  if(!head){
    return null
  }

  let map = new Map()
  let cur = head
  // 新建深拷贝的链表
  while(cur){
    // map的key为旧节点，value为新节点
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }

  // 重新从头开始遍历
  cur = head
  
  // 新建深拷贝的链表
  while(cur){
    // 新节点的next指针指向存储的新节点的next
    map.get(cur).next = map.get(cur.next) || null
    // 新节点的random指针指向存储的新节点的next
    map.get(cur).random = map.get(cur.random) || null

    cur = cur.next
  }

  // 新的链表组合完毕，直接返回
  return map.get(head)
};
// @lc code=end


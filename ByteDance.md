## 算法题

> 1、给一个字符数组按字典顺序排序，要求时间复杂度 O(n)。
> 这一题的思路是将数字数组的冒泡排序进行改造，数字可以直接进行比对，而字符串需要重写一个比对方法

```javascript
var strArray = ["abc", "abd", "cbc", "abc", "adc", "cdb"]
let sortArray = array => {
  let compare = (aStr, bStr) => {
    let aLength = aStr.length,
      bLength = bStr.length
    let min = aLength > bLength ? bLength : aLength
    let i = 0

    while (i < min) {
      if (aStr[i].charCodeAt() > bStr[i].charCodeAt()) {
        return true
      } else if (aStr[i].charCodeAt() < bStr[i].charCodeAt()) {
        return false
      } else {
        i++
      }
    }

    if (aStr[i]) {
      return true
    }

    if (bStr[i]) {
      return false
    }

    return true
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (compare(array[j - 1], array[j])) {
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }

  return array
}
sortArray(strArray)
```

4、中序遍历的非递归写法

```javascript
let iteratorTree = tree => {
  if (tree.left) {
    iteratorTree(tree.left)
  }

  console.log(tree.val)

  if (tree.right) {
    iteratorTree(tree.right)
  }
}

let iteratorTree = tree => {
  let queue = []
  if (tree) {
    queue.push(tree)
  }

  while (queue.length > 0) {
    let current = queue.shift()

    current.left && queue.push(current.left)

    if (current) {
      console.log(current.val)
    }

    current.right && queue.push(current.right)
  }
}
```

5、找出其他所有的数都出现两次的数组中只出现一次的数。

```javascript
let findNum = array => {
  let sum = 0
  for (let i = 0, j = array.length; i < j; i++) {
    sum = sum ^ array(i)
  }

  return sum
}
```

6、翻转句子中的单词（如 hello world -- > olleh dlrow）

```javascript
let reverseWords = function(s) {
  s = s.trim()
  let sum = "",
    temp = "",
    isSpace = false

  for (let i = s.length - 1; i >= 0; i--) {
    if (isSpace && s[i] == " ") {
      continue
    }

    isSpace = s[i] == " "

    if (isSpace) {
      sum = temp + " " + sum
      temp = ""
    } else {
      temp += s[i]
    }

    if (i == 0) {
      sum = temp + " " + sum
    }
  }

  return sum.trim()
}
```

7、有两个字符串，你只可以进行删除操作，问你最少进行多少次操作可以使两个字符串相等。例:sea,eat 需要两次删除操作

> 动态规划 waiting

8、二叉排序树，还有一个数 K。如果能找到，就返回节点，如果找不到，就返回空

```javascript
let binarySortTree = (tree, k) => {
  if (!tree) {
    return null
  }

  if (tree.val > k) {
    binarySortTree(tree.left, k)
  } else if (tree.val < k) {
    binarySortTree(tree.right, k)
  } else {
    return tree
  }
}
```

9、有 M 个有序链表（从大到小）。现在我们要取出前 K 大的元素
10、在我有抛一枚硬币，正面朝上的概率是 p,反面是 1-p。那么第 k 次抛的时候出现第一次正面的概率是多少?

> 动态规划 waiting

11、我们输入两个值 n 和 k，n 表示我们有从 1 到 n 个整数，然后将这些整数都字符串化之后按字典排序，找出其中第 K 大的。例如:n=15,k=5.那么 1-15 字符串化之后排序如下:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9。其中第 5 大的就为 13。
12、实现查询字符串中出现最多次数的字符，用 js 写代码。

```javascript
let findCount = str => {
  let max = 0
  let array = []
  let hadObj = {}
  for (let i = 0, j = str.length; i < j; i++) {
    // 单个字母出现的次数
    let count = str.split(str[i]).length - 1

    // 记录已经出现过的数字
    if (hadObj[str[i]]) {
      continue
    } else {
      hadObj[str[i]] = true
    }
    if (count > max) {
      max = count
      array = []
      array.push(str[i])
    } else if (count == max) {
      array.push(str[i])
    }
  }

  console.log(`${array.toString()},出现了${max}次`)
}
```

13、给你一个数组，数组长度为 n。请找出数组中第 k 大的数（不允许改变元素在数组中的位置
14、单向链表和双向链表的原理和特点

> 单链表是只有一个指针指向后一个节点，如果过了没法退回上一个元素，方便插入和删除，但是不方便查找
> 双向链表是在单链表的基础上加了一个前置指针指向他的前一个节点，第一个元素的前指针指向最后一个元素，之后一个元素的后指针指向第一个元素。形成了一个环一样的结构，方便前后查找，新增和删除会多一步操作，同时他多一个指针的空间，属于利用空间复杂度换取时间复杂的实现方式

15、最长不重复子串长度 非使用 hash 的方式

> 动态规划 waiting

16、在一个长字符串中找一个子字符串是否存在，有，返回 index，没有，返回-1。子字符串要求连续，但不在乎内部字符的顺序

> KMP

17、n 个人，n 个座位，每个人都有自己的座位，问每个人都不坐自己座位的坐法有多少种

> 动态规划 waiting

18、给个有序数组，然后求元素平方后不重复的元素个数，例如[-10, -8, 0, 1, 5, 6, 7]

> 這裡使用兩個指針往中間掃描，如果有与上一個值不相等的情况则记录个数  
> 注意这里的遍历条件 left 可以等于 right，一遍最后一个元素和上一个值进行比较

```javascript
let getSquareSize = array => {
  let left = 0
  let length = array.length
  let right = length - 1
  let pre = Math.abs(array[0])
  let count = 1
  let abs = Math.abs

  while (left <= right) {
    if (abs(array[left]) > abs(array[right])) {
      if (pre != abs(array[left])) {
        count++
        pre = abs(array[left])
      }

      left++
    } else {
      if (pre != abs(array[right])) {
        count++
        pre = abs(array[right])
      }

      right--
    }
  }

  return count
}
```

> 19、一个链表，假设第一个节点我们定为下标为 1，第二个为 2，那么下标为奇数的结点是升序排序，偶数的结点是降序排序，如何让整个链表有序
> 20、反转链表
> 21、Minimum Window Substring
> 22、调整一棵二叉树，调整后，要求所有节点的右子树的最大值大于左子树的最大值。
> 23、Longest Increasing Path in a Matrix
> 24、二叉树的镜面反转
> 25、给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
> 26、给定一个二叉树，原地将它展开为链表
> 27、给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值
> 28、合并两个有序链表。递归和非递归的实现。
> 29、一个双向链表排序
> 30、是关于栈，手写实现 1 秒输出 1，2 秒输出 3，4 秒输出 2
> 31、无序数组的中位数

面试题：
1、输入 url 到实现返回网页的过程
2、tcp 三次握手，四次挥手
3、假设 rtt（数据从两端一来一回） 100ms，那么从输入一个http://url到得到网页要多少时间
4、http code，服务器状态 502 503 504 什么问题，怎么排查
4、https
5、get 和 post 有什么差别
6、ES6 Promise、generator、async

java 部分：
1、hashmap 底层是怎么实现的

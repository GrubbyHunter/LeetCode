/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  let map: any = {}
  // 构建一个小根堆，这里使用小根堆是为了方便每次拿头部元素来比较
  // 头部元素为第K小频率的数字，如果当前元素比头部元素还小，则不用插入堆中
  let heap: any = []
  // map统计每个元素出现次数
  for (let i = 0; i < nums.length; i++) {
    if (typeof map[nums[i]] === "number") {
      map[nums[i]] += 1
    } else {
      map[nums[i]] = 1
    }
  }

  // 插入小根堆中，找到正确的位置
  const insertToHeap = (number: number) => {
    // 放入数组尾部
    heap.push(number)

    // 获取插入位置，也就是数组尾部
    let i = heap.length - 1
    // 父节点下标
    let parentIndex = Math.floor((i - 1) / 2)

    // 当前元素比他的父节点小，那他需要跟父节点交换位置
    while (parentIndex >= 0 && map[heap[i]] < map[heap[parentIndex]]) {
      // 交换  
      [heap[i], heap[parentIndex]] = [heap[parentIndex], heap[i]]
      // 继续向上比较
      i = Math.floor((i - 1) / 2)
      parentIndex = Math.floor((i - 1) / 2)
    }
  }

  // 删除小根堆的第一个元素，保持数组的长度
  const deleteFromHeap = () => {
    // 这里，数组的第一个元素和最后一个元素互换，然后
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
    // 删除最后一个元素
    // 实际上就是删除第一个元素，然后把最后一个元素移到头部，与他的左右比较，重新进行堆排序
    // 这里改成删除尾部元素是为了让数组少移动，因为直接删除第一个元素，会动到整个数组
    heap.pop()

    let index = 0
    let indexCount = map[heap[index]] || -1
    let childCount
    // 先执行一遍，初始化判断条件
    do {
      let left = 2 * index + 1, right = 2 * index + 2
      let leftCount = map[heap[left]] || -1, rightCount = map[heap[right]] || -1
      // 没有左右节点，直接返回
      if (leftCount === -1 && rightCount === -1) {
        break
      }
      // 记录当前节点
      let current = index
      // 左节点不存在
      if (leftCount === -1 && rightCount !== -1) {
        childCount = rightCount
        index = right
      } else if (leftCount !== -1 && rightCount === -1) {
        // 右节点不存在
        childCount = leftCount
        index = left
      } else {
        // 两个节点都存在，跟小的那个节点比较
        if (leftCount < rightCount) {
          childCount = leftCount
          // 找到正确的位置，跳出循环
          index = left
        } else {
          childCount = rightCount
          index = right
        }
      }

      // 比他的子节点大，跟子节点交换，这里currnet为当前节点，index由于重新赋值过了，所以他是子节点
      if (indexCount >= childCount) {
        [heap[current], heap[index]] = [heap[index], heap[current]]
      }

    } while (indexCount > childCount)
    // 移动完，数组的最后一个元素，变成了堆头，需要在堆中找到他正确的位置
  }

  for (let number in map) {
    let count = map[number]
    // 当前小根堆中第一个元素为出现频次最小的数字
    let minCount = map[heap[0]] || 0

    // 如果当前出现频次大于最小频次的那个数字，将number插入小根堆
    if (count > minCount || heap.length < k) {
      insertToHeap(parseInt(number))
    }

    if (heap.length > k) {
      // 堆数组超长，需要删除第一个元素，也就是最小的那个，维持前K个元素依然是出现频次最高的k个数字
      deleteFromHeap()
    }
  }

  return heap
};
// @lc code=end


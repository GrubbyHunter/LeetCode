// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
class NestedIterator {
  queue: any
  list: any

  constructor(nestedList: []) {
    this.list = nestedList
    const firstItem = this.list.shift()

    this.queue = typeof firstItem === "number" ? [firstItem] : this.getList(firstItem)
  }

  getList(list) {
    let result: any = []

    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === "number") {
        result.push(list[i])
      } else {
        result.push(this.getList(list[i]))
      }
    }

    return result
  }
  hasNext(): boolean {
    return this.queue.length !== 0 || this.list.length !== 0
  }

  next(): number {
    if (this.queue.length > 0) {
      return this.queue.shift()
    }

    const first = this.list.shift()

    if (typeof first === "number") {
      return first
    }

    this.queue = this.getList(first)

    return this.queue.shift()
  }
}
let a = new NestedIterator([[1, 1], 2, [1, 1]])
while (a.hasNext()) {
  a.next()
}
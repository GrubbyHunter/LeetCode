// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
class LRUCache {
  private length: number; // 容量
  private map: any; // 存储空间
  private unUsedList: string[]; // 已使用的key
  constructor(capacity: number) {
    this.length = capacity
    this.map = {}
    this.unUsedList = []
  }

  get(key: number): number {
    let srtKey = key.toString()

    if (!this.map[srtKey]) {
      return -1
    }

    let index = this.unUsedList.indexOf(srtKey)
    this.unUsedList.splice(index, 1)

    this.unUsedList.push(srtKey)
    return this.map[srtKey]
  }

  put(key: number, value: number): void {
    let srtKey = key.toString()

    if (typeof this.map[srtKey] === "number") {
      let index = this.unUsedList.indexOf(srtKey)
      this.unUsedList.splice(index, 1)

      this.unUsedList.push(srtKey)
      this.map[srtKey] = value
      return
    }

    if (this.length === 0) {
      let firstKey = this.unUsedList.shift()

      if (firstKey) {
        delete this.map[firstKey]
      }

      this.map[srtKey] = value

    } else {
      this.map[srtKey] = value
      this.length -= 1
    }

    this.unUsedList.push(srtKey)
  }
}

let lRUCache = new LRUCache(2);
lRUCache.get(2); // -1
lRUCache.put(1, 0); // 缓存是 {2=6}
lRUCache.put(2, 2); // 缓存是 {2=6}
lRUCache.get(1);    // 返回 -1
lRUCache.put(3, 3); // 缓存是 {2=6}
lRUCache.get(2); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}

// @lc code=end

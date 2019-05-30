let array = [1, 6, 4, 7, 5, 9, 10, 4, 19, 2, 11, 8]
/**
 * 归并排序：
 * 1、第一步将数组两两分组，然后对单组进行比较大小排序
 * 2、将单组进行两两合并，合并的时候使用两个指针对两个数组进行合并排序
 * 3、合并之后再次对厚冰厚的数组进行上述操作，最终完成排序
 *
 * 这里数组需要合并log2n次,然后合并里面的排序是遍历n次，所以时间复杂度是O(n*log2n)，空间复杂度为O(n)
 */
let mergeSort = array => {
  let splitArr = arr => {
    let length = arr.length
    let middle = Math.floor(length / 2)
    if (length == 1) {
      return arr
    }
    // 对数组进行二分拆分
    let left = splitArr(arr.slice(0, middle))
    let right = splitArr(arr.slice(middle, length))

    // 拆分完进行合并
    return mergeArr(left, right)
  }

  let mergeArr = (left, right) => {
    let l = 0,
      r = 0
    let newArr = []
    // 合并的思路试试用左右下标进行比较然后插入到新数组，所以杂合一步确定额外空间需要一个长度为n的数组，所以空间复杂度为O(n)
    while (l < left.length && r < right.length) {
      if (left[l] >= right[r]) {
        newArr.push(right[r])
        r++
      } else {
        newArr.push(left[l])
        l++
      }
      
      // 一个数组遍历完了，另一个没有遍历完，则直接把剩下的部分追加到尾部
      if (l == left.length && right.slice(r).length > 0) {
        return newArr.concat(right.slice(r))
      }

      if (r == right.length && left.slice(l).length > 0) {
        return newArr.concat(left.slice(l))
      }
    }

    return newArr
  }

  return splitArr(array)
}

mergeSort(array)

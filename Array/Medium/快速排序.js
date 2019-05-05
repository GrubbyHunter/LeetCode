let array = [1, 6, 4, 7, 5, 9, 10, 4, 19, 2, 11, 8]
let quickSort = array => {
  let length = array.length

  let sort = arr => {
    if (arr.length == 1) {
      return arr
    }

    let l = 0,
      r = arr.length - 1

    if (l >= r) {
      return arr
    }

    let item = arr[0]
    let temp

    while (l < r) {
      //从右边开始找，找到比基准小的元素
      while (arr[r] >= item && r > l) {
        r--
      }

      //从左边开始找，找到比基准打的元素
      while (arr[l] <= item && r > l) {
        l++
      }

      // 然後互换，重复这个过程
      temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
    }

    // 完成遍历之后，l == r，这时候r与基准互换，拆分成左右两个数组
    // 左边的元素都比基准小，右边的元素都比基准大，然后重复这个过程
    temp = arr[0]
    arr[0] = arr[r]
    arr[r] = temp

    let left = sort(arr.slice(0, r))
    let right = sort(arr.slice(r + 1, length))

    return left.concat(item).concat(right)
  }

  return sort(array)
}

quickSort(array)

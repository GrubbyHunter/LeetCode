let array = [1, 6, 4, 7, 5, 9, 10, 4, 19, 2, 11, 8]
// 核心在于将数组从第一个元素进行排序，然后通过嵌套循环不断地将
// 当前元素在已经排序好的数组中找到正确的位置
let insertSort = arr => {
  let length = arr.length
  let temp
  debugger
  for (let i = 1; i < length; i++) {
    temp = arr[i]
    let j = i
    // 将当前元素在之前排好序的数组里面找插入位置
    while (temp < arr[j - 1] && j > 0) {
      // 找到需要插入的位置
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp
  }

  return arr
}

insertSort(array)

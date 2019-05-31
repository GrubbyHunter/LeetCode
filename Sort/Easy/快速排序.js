let array = [1, 6, 4, 7, 5, 9, 10, 4, 19, 2, 11, 8]
/**
 * 快速排序的核心是找一个基准（通常是第一个元素），将数组分成比基准大和比基准小的两个数组
 * 通过递归重复进行这一过程，然后连接比基准小的数组+基准+比基准大的数组
 *
 * 这里需要注意：
 * 分成两个数组的方法是使用头尾（左右）两个指针，依次找到比基准到的元素和比基准小的元素然后互换位置
 */
let quickSort = array => {
  let length = array.length
  if (length <= 1) {
    return array
  }

  // 先将第一个元素作为中心点临时存起来
  let middle = array[0]
  let left = 0,
    right = length - 1

  while (left < right) {
    // 从右边开始找到比中心点小的数
    while (array[right] >= middle && right > left) {
      right--
    }
    array[left] = array[right]
    // 因为right把left的位置占据了，所以left++使用下一个元素进行比较
    right > left && left++

    // 从左边开始找到比中心点大的数
    while (array[left] <= middle && right > left) {
      left++
    }

    array[right] = array[left]
    // 因为left把right的位置占据了，所以right--使用上一个元素进行比较
    right > left && right--
  }

  // 将中间点的值放入对应位置
  array[right] = middle

  let leftArr = array.slice(0, right)
  let rightArr = array.slice(right + 1)
  return quickSort(leftArr)
    .concat([middle])
    .concat(quickSort(rightArr))
}

quickSort(array)

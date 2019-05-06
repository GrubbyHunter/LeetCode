let array = [1, 6, 4, 7, 5, 9, 10, 4, 19, 2, 11, 8]

let insertSort = array => {
  let length = array.length
  let temp

  for (let i = 1; i < length; i++) {
    temp = array[i]
    let j = i

    while (temp < array[j - 1] && j > 0) {
      // 找到需要插入的位置
      array[j] = array[j - 1]
      j--
    }

    array[i] = temp
  }

  return array
}

/**
 * @desc 打平一個數組
 */
let arr = [1, 2, [3, 4], [5, [6, 7], 8, 9, [10, 11, 12], 13], 14, 15]
let flatten = array => {
  return array.reduce((result, current) => {
    let child = Array.isArray(current) ? flatten(current) : current

    return result.concat(child)
  }, [])
}

flatten(arr)

/**
 *  @desc 实现深拷贝
 **/
let deepClone = obj => {
  // 使用toString判断类型，因为，typeof区分不出数组，null，undefined和对象，instanceof也区分不出
  // 使用for in遍历对象的属性，原型上的属性也能够遍历
  let type = Object.prototype.toString.call(obj)
  switch (type) {
    case 1:
      break
  }
  for (let key in obj) {
    console.log(key)
  }
}
deepClone(new Person())

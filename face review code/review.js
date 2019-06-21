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
  let result = null

  switch (type) {
    case "[object String]":
      result = obj
      break
    case "[object Number]":
      result = obj
      break
    case "[object Boolean]":
      result = obj
      break
    case "[object Date]":
      result = new Date(obj.getTime())
      break
    case "[object Null]":
      result = null
      break
    case "[object Undefined]":
      result = undefined
      break
    case "[object Object]":
      result = {}
      for (let key in obj) {
        result[key] = deepClone(obj[key])
      }
      break
    case "[object Array]":
      result = []
      for (let item of obj) {
        result.push(deepClone(item))
      }
      break
  }
  return result
}

/**
 * @desc 手动实现一个co函数
 * 递归调用自身
 */
function* genFun() {
  yield "first"
  yield "second"
  yield "third"
}

function co(fun) {
  var ctx = this

  return new Promise((resolve, reject) => {
    if (typeof fun !== "function") {
      return resolve(fun)
    }

    let genHandle = fun.call(ctx)

    function next() {
      let result = genHandle.next()
      console.log(result.value, result.done)
      if (result.done) {
        resolve(result.value)
        return
      }
      next()
    }

    next()
  })
}
co(genFun)

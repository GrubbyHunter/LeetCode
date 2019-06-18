/**
 * @desc
 */
let arr = [1, 2, [3, 4], [5, [6, 7], 8, 9, [10, 11, 12], 13], 14, 15]
let flatten = array => {
  return array.reduce((result, current) => {
    let child = Array.isArray(current) ? flatten(current) : current

    return result.concat(child)
  }, [])
}

flatten(arr)

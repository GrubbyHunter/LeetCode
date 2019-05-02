/**
 *将一个字符串ip转换成一个数字
 *
 * @param {string} ip
 * @return {number}
 */
function ipToNumber(ip) {
  let array = ip.split(".")
  let str = ""

  for (let i = 0; i < array.length; i++) {
    // 普通数字转二进制然后进行累加字符串长度
    let temp = parseInt(array[i]).toString(2)

    if (temp.length < 8) {
      let count = 8 - temp.length

      while (count > 0) {
        temp = "0" + temp
        count--
      }
    }

    str += temp
  }

  return parseInt(str, 2)
}

/**
 *将一个数字转换成一个字符串ip地址
 *
 * @param {number} num
 * @return {string} ip
 */
function numberToIp(num) {
  let str = num.toString(2)
  let i = 0
  let ip = ""

  while (i < 32) {
    // 二进制转十进制
    ip = ip + "." + parseInt(str.substr(i, 8), 2)
    i = i + 8
  }

  return ip.slice(1)
}

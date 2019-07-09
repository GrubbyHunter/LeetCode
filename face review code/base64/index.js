const BASE_64_CODE =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

// 转化成二进制
let toBinaryCode = str => {
  let totalStr = ""
  let content = 0

  for (let i of str) {
    // 先转成ASCII码，然后将ASCII码转成二进制
    content = i.charCodeAt().toString(2)

    let preLength = 8 - content.length

    // 1 byte(子节)等于8 bit(比特)
    while (preLength) {
      content = "0" + content
      preLength--
    }

    totalStr += content
  }

  return totalStr
}

let toBase64Code = str => {
  let binaryCode = toBinaryCode(str)
  let afterStr = ""
  let result = ""

  if (binaryCode.length % 24 === 16) {
    // 16补全2个0变成18位就能被6整除
    binaryCode += "00"
    afterStr = "="
  }

  if (binaryCode.length % 24 === 8) {
    // 8补全4个0变成12位就能被6整除
    binaryCode += "0000"
    afterStr = "=="
  }

  for (let i = 0; i < binaryCode.length; i += 6) {
    // 不能超过64位，即2的6次方，所以取二进制每6位进行运算
    let str = binaryCode.substr(i, 6)
    // 二进制字符串还原成10进制数字，然后获取base64对应编码的字符串
    result += BASE_64_CODE[parseInt(str, 2)]
  }

  return result + afterStr
}

console.log(toBase64Code("abcd"))

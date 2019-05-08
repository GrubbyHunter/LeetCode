/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let tempWord = ""
  let tempStr = ""
  let hasSpace = false

  if (!s) {
    return ""
  }

  s = s.trim()

  let length = s.length
  let space = ""

  for (let i = length - 1; i >= 0; i--) {
    if (s[i] == " ") {
      if (hasSpace) {
        continue
      }
      hasSpace = true
    } else {
      hasSpace = false
    }

    if (!hasSpace) {
      tempWord = s[i] + tempWord
    }

    if (s[i] == " " || i == 0) {
      if (!tempStr) {
        space = ""
      } else {
        space = " "
      }

      tempStr += space + tempWord
      tempWord = ""
    }
  }

  return tempStr
}

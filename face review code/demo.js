let str = './a1'
let { x } = require(str)

console.log(x)
setTimeout(() => {
  console.log(x)
}, 1000)

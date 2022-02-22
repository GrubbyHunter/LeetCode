// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function decodeString(s: string): string {
  let arr = s.split("]");
  let leftStr = arr[0];
  let rightArr = arr.slice(1);

  const handleStr = (
    str: string,
    count: number,
    rightArr: string[]
  ): string => {
    let result = "";
    let right = rightArr.pop();
    let strEndIndex = 0;
    let numberEndIndex = 0;

    for (let i = 0; i < str.length; i++) {
      if (strEndIndex === 0 && Number.isInteger(parseInt(str[i]))) {
        strEndIndex = i;
      }
      if (str[i] === "[") {
        numberEndIndex = i;
        break;
      }
    }
    let left = str.substring(0, strEndIndex);
    let childCount = parseInt(str.substring(strEndIndex, numberEndIndex));

    for (let i = 0; i < count; i++) {
      result +=
        left +
        handleStr(str.substring(0, strEndIndex), childCount, rightArr) +
        right;
    }

    return result;
  };

  return handleStr(leftStr, 1, rightArr);
}
decodeString("3[a]2[bc]");
// @lc code=end

// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
<<<<<<< HEAD
function numIslands(grid: string[][]): number {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0") {
        continue
      }

      if (i === 0 && j === 0) {
        count++
        continue
      }

      if (i === 0) {
        if (j = grid[i].length - 1) {
          if (grid[i][j - 1] === "0" && grid[i + 1][j] === "0") {
            count++
          }
        } else {
          if (grid[i][j - 1] === "0") {
            count++
          }
        }
        continue
      }

      if (j === 0) {
        if (i === grid.length - 1) {
          if (grid[i - 1][j] === "0" && grid[i][j + 1] === "0") {
            count++
          }
        } else {
          if (grid[i - 1][j] === "0") {
            count++
          }
        }
        continue
      }

      if (grid[i - 1][j] === "0" && grid[i][j - 1] === "0") {
        count++
      }
    }
  };
  return count
}
numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]
)
=======
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
>>>>>>> d4485f39b5025ee47c9d77ca9e5e6780a16ef320
// @lc code=end

// 冒泡排序
const bubbleSort = (list: number[]): number[] => {
  // 遍历外围，这里0到i - 1 是已经排好序的升序数组
  for(let i = 0; i < list.length;i++){
    // 找到 i 到结尾中的范围中最小的元素，让他与i互换位置
    for(let j = i + 1; j < list.length;j++){
      if(list[i] > list[j]){
        [list[i],list[j]] = [list[j],list[i]]
      }
    }
  }

  return list
}
/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // 这里前提是1-n得数，不会发生数组越界，才可以使用快慢指针
  let fast = 0;
  let slow = 0;

  // 讲数组当做链表来遍历，数组中有重复元素，那么链表中存在环
  // fast 每次走两步
  // 这里因为快慢指针的起始位置相同，所以要使用do while先执行一次，否则不会进入循环
  do {
    // fast 每次走两步
    fast = nums[nums[fast]];
    // slow 每次走一步
    slow = nums[slow];
  } while (fast !== slow);

  // 递推公式，假设起点到环入口为x，环入口到相遇点为y，相遇点到环入口为z
  // 快指针走了x+y+z+y，慢指针走了x + y
  // 快指针是慢指针的2倍速 ,所以 2*(x+y) = x+y+z+y => x = z => 起点到入口距离x = 等于相遇点到入口距离z
  // 与142题环形链表推理一致
  // 找到相遇点，之后，fast从0开始，slow从相遇点开始
  fast = 0;
  while (fast !== slow) {
    //两者每次都只走一步，再次相遇即为环的入口，也就是重复的数
    fast = nums[fast];
    // slow 每次走一步
    slow = nums[slow];
  }

  return slow;
}
// @lc code=end

// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

// 示例 1：

// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
// 示例 2：

// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4 (序列化形式：[4,5,6])
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。



//思路：快指针每次走两步，慢指针每次走一步，当快指针走到走到终点时，慢指针刚好走到中间
//1.快慢指针
var middleNode = function(head) {
  let fast = head, slow = head
  while(fast&&fast.next){
      fast = fast.next.next
      slow = slow.next
  }
  return slow
};
//2.数组，遍历，用数组记录链表，res[len>>1]为其中间节点
// （位运算比除法效率高一点，优先级也高）
var middleNode = function(head) {
  let len = 0, newHead = head, res = []
  while(newHead){
      res[len++] = newHead
      newHead = newHead.next
  }
  return res[len>>1]
}


// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

//  

// 示例 1：

// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// 示例 2：

// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。
// 示例 3：

// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。
// 示例 4：

// 输入：[1,1]
// 输出：true
// 解释：可行的分组是 [1,1]
// 示例 5：

// 输入：[1,1,2,2,2,2]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[2,2]



function haha(deck){
  const obj = {};
  let max = 0;
  // 利用对象 o 遍历存储 各牌 出现的次数，并用 Object.values(o) 并且转化为各牌数对应数组
  for (let i = 0; i < deck.length; i++) {
    const item = deck[i];
    if (!obj[item]) {
      obj[item] = 1;
    }else{
      obj[item] +=1;
    }
    max = Math.max(obj[item],max)
  }
  const arr = Object.values(obj);
  //并使用Array.every() 判断数组各牌数是否整除 x
  let X = 2;
  while(max>=X){
    if (arr.every(item=>item%X === 0)) {
      return true
    }
    X++;
  }
  return false;
}
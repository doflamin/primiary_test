// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
const arr = [2,4,5,3,6,1]


//第一种思路
function findK(arr,k) {
  const tarArr = quickSort(arr)
  return tarArr.slice(0,k)
}
function quickSort(arr) {
  return arr.length <= 1? arr: quickSort(arr.slice(1).filter(item => item <= arr[0]))
  .concat(arr[0], quickSort(arr.slice(1).filter(item => item > arr[0])));
}


//第二种思路，运用sort
function findK(arr,k) {
  return arr.sort((a, b) => a - b).slice(0, k)
}

console.log('--->',findK(arr,5))
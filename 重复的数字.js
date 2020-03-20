// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 

// 2 <= n <= 100000

const arr1 = [2,2,2, 3,3, 0, 2, 5,5, 1, 4, 4,4]

function findSame(arr) {

    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return;
    }
    const arrLength = arr.length;
    const tarObj = {};
    for (let i = 0; i < arrLength; i++) {
        if (!tarObj[arr[i]]) {
            tarObj[arr[i]] = 1
        }else{
            tarObj[arr[i]] +=1
        }

    }
    const tarArr = []
    for (const i in tarObj) {
      if (tarObj[i]>1) {
        tarArr.push(i)
      }
    }
    return tarArr;
}


console.log('---->', findSame(arr1))
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21


const num = 1243;

function reverse(params) {
  let isnegative = false;
  const fushu = -2;

 
  if (params < 0) {
    isnegative = true;
    params = Math.abs(params)
  }
  let result =  (params+'').split('').reverse();
  const newArr = [];
  let stop = false;

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== '0') {
      stop = true
    }

    if (stop) {
      newArr.push(result[i])
    }
    
  }
  result = newArr.join('')
  if (isnegative) {
    result = '-'+result
  }
  if (result> Math.pow(-2, 31) || result <= (Math.pow(2, 31)-1)) {
    return 0;
  }
  return  result
}


console.log(reverse(num))


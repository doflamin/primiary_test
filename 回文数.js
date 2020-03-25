

function isPalindrome(x) {
const result = String(x).split('').reverse().join('')
console.log(result);

return result === x?true:false;
}

isPalindrome(121)
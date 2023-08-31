function isPalindromeStr(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log("Palindrom string: ", isPalindromeStr("racecar"));

function isPalindromeNum(num) {

  let reverse = 0;
  let temp = num;
  while (temp != 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse == num;
}

console.log("Palindrom number: ", isPalindromeNum(1331));
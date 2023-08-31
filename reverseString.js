function FirstReverse(str) {
  let res = "";
  let length = str.length;
  for (let i = 0; i < length; i++) {
    res = res + str[length - i - 1];
  }
  return res;
}

function FirstReverseTwo(str) {
  let temp;
  let length = str.length;
  let res = str.split("");
  for (let i = 0; i < length / 2; i++) {
    temp = res[length - i - 1];
    res[length - i - 1] = res[i];
    res[i] = temp;
  }
  return res.join("");
}

console.log("Solution 1: ",FirstReverse("I Love Code"));
console.log("Solution 2: ", FirstReverseTwo("I Love Code"));

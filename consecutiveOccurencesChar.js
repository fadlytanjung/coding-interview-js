function solution(s){
  let res = "";
  for (let i = 0; i < s.length; i++) {
      let count = 1;
      while (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
          i++;
          count++;
      }
      res+= `${s.charAt(i)}${count}`;
  }
  return res;
}

console.log("Solution 1:", solution("aaabbbcc")); // a3b3c2
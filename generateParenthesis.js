function generateParenthesis(n) {
  const result= [];

  const generate = (
    str,
    max,
    open,
    close,
    result
  ) => {
    if (close === max) {
      result.push(str);
      return;
    }
    if (open < max) {
      generate(str + "(", max, open + 1, close, result);
    }

    if (close < open) {
      generate(str + ")", max, open, close + 1, result);
    }
  }
  generate("", n, 0, 0, result);
  return result;
}

console.log("Solution 1:", generateParenthesis(2));

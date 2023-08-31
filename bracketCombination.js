/*
* Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero,
* and return the number of valid combinations that can be formed with num pairs of parentheses. For example,
* if the input is 3, then the possible combinations of 3 pairs of parenthesis,
* namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()).
* There are 5 total combinations when the input is 3, so your program should return 5.
*/

function BracketCombinations(num) {
  let count = 0;

  const dfs = (open, close) => { // Deep First Search
    // Backtracking case: number of ')' can't be more than number of '('
    if (open < close) return;

    // Base case: there are n number of open and close parenthesis
    if (open === num && close === num) {
      count += 1;
      return;
    }

    // DFS traversal
    if (open < num) dfs(open + 1, close);
    if (close < num) dfs(open, close + 1);
  };

  dfs(0, 0);
  return count;
}

// keep this function call here
console.log("Solution 1: ", BracketCombinations(3));

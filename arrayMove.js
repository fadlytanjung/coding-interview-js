function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

let arr = [1, 2, 3, 4, 5, 6];
let res = array_move(arr, 2, 5);
console.log({ res, arr });

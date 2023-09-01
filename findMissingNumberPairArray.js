function findMissingNumberPairArray(arr1, arr2) {
  let sum1 = arr1.reduce((el, val) => el + val, 0);
  let sum2 = arr2.reduce((el, val) => el + val, 0);
  return Math.abs(sum1 - sum2);
}

console.log(
  "Solution 1: ",
  findMissingNumberPairArray([1, 2, 3, 4, 5], [1, 2, 3, 5])
);


function findMissingNumberPairArrayTwo(arr1, arr2) {
  
  let temp = {}

  for(let i in arr1){
    if(i in temp){
      temp[i] += 1;
    }else{
      temp[i] = 1
    }
  }

  for (let i in arr2) {
    if (i in temp) {
      temp[i] -= 1;
    } else {
      temp[i] = 1;
    }
  }

  for(let res in temp){
    if(temp[res]!= 0){
      return res;
    } 
  }
  return 0;
}

console.log(
  "Solution 2: ",
  findMissingNumberPairArrayTwo([1, 2, 3, 4, 5], [1, 2, 3, 5])
);

function findMissingNumberPairArrayThree(arr1, arr2) {
  let result = 0

  for(element in arr1){
    result ^= element
  }

  for (element in arr2) {
    result ^= element;
  }
  return result
}

console.log(
  "Solution 2: ",
  findMissingNumberPairArrayThree([1, 2, 3, 4, 5], [1, 2, 3, 5])
);
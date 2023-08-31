/*
* Given an array of integer value eg: [2,4,0,4,3,-1,0,5,0]
* Move all zero value to the end of array list
* expected: [2,4,4,3,-1,5,0,0,0]
*/

const solutionOne = (arr) => {
  for(let item in arr){
    if(arr[item] === 0){
      arr.splice(item, 1);
      arr.push(0);
    }
  }
  return arr;
}

console.log("solution 1: ", solutionOne([2, 4, 0, 4, 3, -1, 0, 5, 0]));


const solutionTwo = (arr) => {
  let m = 0, temp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp = arr[i];
      arr[i] = arr[m];
      arr[m] = temp;
      m++;
    }
  }

  return arr;
};

console.log("solution 2: ", solutionTwo([2, 4, 0, 4, 3, -1, 0, 5, 0]));

const solutionThree = (arr) =>{
  let j = 0;
  let i = 1;
  while (i < arr.length) {
    if (arr[j] === 0 && arr[i] !== 0) {
      arr[j] = arr[i];
      arr[i] = 0;
      j++;
    }
    if (arr[j] !== 0) {
      j++;
    }
    i++;
  }

  return arr;
}

console.log("solution 3: ", solutionThree([2, 4, 0, 4, 3, -1, 0, 5, 0]));


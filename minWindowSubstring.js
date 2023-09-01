function MinWindowSubstring(strArr) {
  let str = strArr[0];
  let needle = strArr[1].split("");

  //start with the smallest possible substrings, then go up
  for (let i = needle.length, len = str.length; i <= len; i++) {
    for (j = 0; j <= len - i; j++) {
      let mySlice = str.substr(j, i);
      if (isContained(mySlice)) {
        return mySlice;
      }
    }
  }
  return "Not in string";

  // ---------------------- helpers -----------------------------
  //isContained checks to see if all the chars in the needle are in the given string
  function isContained(str) {
    let arr = str.split("");
    for (let i = 0, len = needle.length; i < len; i++) {
      let place = arr.findIndex((val) => {
        return val === needle[i];
      });
      if (place === -1) {
        return false;
      } else {
        arr.splice(place, 1);
      }
    }
    return true;
  }
}

// keep this function call here
console.log("solution 1: ",MinWindowSubstring(["aaabaaddae", "aed"]));

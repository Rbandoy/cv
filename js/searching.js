/*
  linear search
  search from first index to last element in array
*/


const search = (arr, data) => {
  let found = false;
  ar.forEach((value, index) => {
    if (value == data) found = true;
  });
  return found;
}

// console.log(search(ar, find) ? "data found!": "can't find data!");


// ar.map((item, index) => {
//   console.log(index)
// })

/*
  binary search
  divide array into two
*/
const ar = [1,2,3,4,5,6];
const find = 6;

let n = ar.length;
const binarySearch = (arr, l, n, find) => {
  if (n>=1) { 
      let mid = l + (Math.floor((n - l) /2));
      console.info(l, n, mid)
      
      if (ar[mid] == find) return console.log("found") 
      
      if (ar[mid] > find) binarySearch(arr, l, mid - 1, find)
      binarySearch(arr, mid + 1, n, find)
  } 
}

binarySearch(ar, 0, n - 1, find);
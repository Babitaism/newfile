function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else {
      diff = arr[i] - min;
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

let maximumDiff = maxDifference([11, 2, 3, 4, 5, 6, 78]);
console.log(maximumDiff);

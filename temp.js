// let possibleCombinations = (arr) => {
//   let combinations = [];
//   debugger;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length + 1; j++) {
//       combinations.push(arr.slice(i, j));
//     }
//   }
//   return combinations;
// };
// console.log(possibleCombinations([1,2,3,4]));

let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }
  let permutationsArray = [];
  debugger
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

console.log(findPermutations("abcd"))
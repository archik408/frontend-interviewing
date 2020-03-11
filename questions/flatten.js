// Without using .flat(), create a function to flatten an array
const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];

function flatten(list = []) {
  const result = [];
  for (var i = 0; i < list.length; i++) {
    const item = list[i];
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]

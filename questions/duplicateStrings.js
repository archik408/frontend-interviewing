// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

// optimized
function removeDuplicates(text = '') {
  // have no rules about '.', ',' and etc. (including double space) just skip this cases
  const uniqMap = text
    .split(' ')
    .reduce((map, word) => {
      if (!map[word]) map[word] = true;
      return map;
    }, {});
    return Object.keys(uniqMap).join(' ');
}

// normal
function removeDuplicates2(text = '') {
  // have no rules about '.', ',' and etc. (including double space) just skip this cases
  return text
    .split(' ')
    .reduce((acc, word) => {
      if (!acc.includes(word)) acc.push(word);
      return acc;
    }, [])
    .join(' ');
}

// hacky
function removeDuplicates(text = '') {
  // have no rules about '.', ',' and etc. (including double space) just skip this cases
  return Array.from(new Set(text.split(' '))).join(' ');
}

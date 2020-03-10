// Create a function to reverse a string

/*
    reverse('Hello, world!'); // !dlrow ,olleH
*/

function reverse(text) {
    // without error handling
    return text.split('').reverse().join('');
}

// boring example
function reverse2(text) {
  let result = '';
  for (let i = text.length - 1; i >= 0; i--)  {
    result = result + text[i];
  }
  
  return result;
}

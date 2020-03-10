// Create a function to turn any function into a "promisfied" function.
// Any function to be promisified will always have a callback as the last argument.
// The callback will always have this signature:
//   function(result){}

const exampleFn = function (x, y, callback) { setTimeout(() => callback(x + y), 100) };

function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    // no need try {} catch (e) {} because Promise handle this case by default
    // so, added check only for error-first callback case
    fn && fn(...args, (result, ...rest) => result instanceof Error ? reject(result) : resolve(result, ...rest));
  });
}

const promisedFn = promisify(exampleFn);
promisedFn(1, 3).then(r => r + 2).then(r => console.log(r)).catch(e => console.log(e.message)); // 6

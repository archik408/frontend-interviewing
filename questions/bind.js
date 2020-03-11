// Implement Function.prototype.bind()


const foo = function(a, b) {
    console.log(this.bar, a, b);
}
    
foo.bind2 = function (context, ...argsToBind) {
    return (...args) => {
        return this.call(context, ...argsToBind, ...args);
    }
};

let baz = foo.bind2({bar: 'hello'}, 2)

baz(3); // "hello" 2 3

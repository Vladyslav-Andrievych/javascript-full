function saveCalls(func) {
  const calls = [];

  function withMemory(...args) {
    calls.push(args);
    return func.call(this, ...args);
  }

  withMemory.calls = calls;

  return withMemory;
}

// function test(a, b) {
//   return a + b;
// }

// const testWithMemory = saveCalls(test);

// console.log(testWithMemory(2, 2));
// console.log(testWithMemory(4, 7));

// console.log(testWithMemory.calls);

const user = {
  name: 'Vlad',
  sayHi(age) {
    return `Hello, my name is ${this.name}. I am ${age} years old`;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply(user));
console.log(methodWithMemory.apply({ name: 'Tom' }, [21]));
console.log(methodWithMemory.calls);

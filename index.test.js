function bind(func, context, ...args) {
  return function (...anotherArgumetns) {
    return func.call(context, ...args, ...anotherArgumetns);
  };
}

const user = {
  name: 'Vlad',
};

// function sayHi(age, age2, age3) {
//   console.log(
//     `My name is ${this.name}, i am ${age} ${age2} ${age3} years old!`
//   );
// }
function sayHi(age, age2, age3) {
  return `My name is ${this.name}, i am ${age} ${age2} ${age3} years old!`;
}

// const sayHiTwo = bind(sayHi, { name: 'Tom' }, 24);
// sayHiTwo(21, 27);
// sayHiTwo(22, 28);

it('text', () => {
  const sayHiTwo = bind(sayHi, { name: 'Tom' }, 24);
  let result = sayHiTwo(21, 27);
  expect(result).toEqual('My name is Tom, i am 24 21 27 years old!');
  result = sayHiTwo(22, 28);
  expect(result).toEqual('My name is Tom, i am 24 22 28 years old!');
});

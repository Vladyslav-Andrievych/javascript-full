import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('Should get squared numbers from array', () => {
  const result = getSquaredArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 4, 9, 16, 25]);
});

it('Should get only odd numbers from array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('Should get sum of numbers', () => {
  const result = getSum(4, 10);

  expect(result).toEqual(14);
});

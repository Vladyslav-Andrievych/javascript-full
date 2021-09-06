import { reverseArray, withdraw, getAdults } from './calculator';

it('Should get reversed array', () => {
  let result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);

  result = reverseArray('[1, 2, 3, 4, 5, 6]');
  expect(result).toEqual(null);

  result = reverseArray(4, 5, 6);
  expect(result).toEqual(null);
});

it('Should get amount of money in account after operation or -1 if not enough money', () => {
  let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);

  result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);

  result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87);
  expect(result).toEqual(0);
});

it('Should get 18 and up years old people', () => {
  let result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });

  result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });

  result = getAdults({});
  expect(result).toEqual({});
});

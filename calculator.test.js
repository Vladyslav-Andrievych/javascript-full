import { calc } from './calculator';

it('Should right calculate math operation with two arguments', () => {
  let result = calc('5 + 5');
  expect(result).toEqual('5 + 5 = 10');

  result = calc('5 - 5');
  expect(result).toEqual('5 - 5 = 0');

  result = calc('5 * 5');
  expect(result).toEqual('5 * 5 = 25');

  result = calc('5 / 5');
  expect(result).toEqual('5 / 5 = 1');

  result = calc(5 + 5);
  expect(result).toEqual(null);
});

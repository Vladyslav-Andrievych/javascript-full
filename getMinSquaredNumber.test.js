import getMinSquaredNumber from './getMinSquaredNumber.js';

it('Should get the powed to 2 min number from array', () => {
  let result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);

  result = getMinSquaredNumber([]);
  expect(result).toEqual(null);

  result = getMinSquaredNumber('[-777, 3, -2, 6, 45, -20]');
  expect(result).toEqual(null);
});

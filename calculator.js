export const reverseArray = (arr) =>
  Array.isArray(arr) ? [...arr].reverse() : null;

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (balances[index] - amount < 0) {
    return -1;
  }

  balances[index] -= amount;

  return balances[index];
};

export const getAdults = (obj) => {
  const result = {};

  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};

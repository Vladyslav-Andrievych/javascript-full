function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (i === 2) {
      console.log(i);
      continue;
    }

    let flag = false;

    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        break;
      } else if (j === i - 1) {
        flag = true;
      }
    }

    if (flag) {
      console.log(i);
    }
  }
}

getPrimes(62);

// нечетные числа на промежутке

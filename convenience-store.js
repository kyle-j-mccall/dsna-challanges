function changeEnough(coins, amount) {
  qTotal = coins[0] * 25;
  dTotal = coins[1] * 10;
  nTotal = coins[2] * 5;
  pTotal = coins[3] * 1;

  total = qTotal + dTotal + nTotal + pTotal;

  if (total > amount * 100) {
    console.log("true");
  } else {
    console.log("false");
  }
}

changeEnough([2, 100, 0, 0], 14.11);

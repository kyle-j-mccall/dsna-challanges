function countJewels(jewels, stones) {
  let counter = 0;
  for (let i = 0; i < stones.length; ++i) {
    if (jewels.includes(stones[i])) {
      ++counter;
    }
  }
  console.log(counter);
}

countJewels("aA", "aAAbbbb");

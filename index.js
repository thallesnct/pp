coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]
// "coins": [1, 1, 1, 1, 1]
// "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]


const leastAmountOfChange = (coinsArr) => {
  const sortedCoins = coinsArr.sort((a, b) => a > b ? 1 : -1)
  let leastAmountPossible = 0

  sortedCoins.forEach(coin => {
    if (coin > leastAmountPossible + 1) return leastAmountPossible + 1

    leastAmountPossible += coin
  })

  return leastAmountPossible + 1;
}

console.log(leastAmountOfChange(coins))

const calculateSortedSquaredArr = (numArr) => {
  const unsignedNumArr = numArr.map(num => num <= 0 ? num * -1 : num).sort((a, b) => a > b ? 1 : -1)

  return unsignedNumArr.map(num => num * num)
}

const numArr = [-2, -1]

console.log(calculateSortedSquaredArr(numArr))
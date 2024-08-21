/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

function calculateResult(position1, position2, position3) {
  // write your code here
  const Reel1 = [
    "cherry",
    "lemon",
    "apple",
    "lemon",
    "banana",
    "banana",
    "lemon",
    "lemon",
  ];
  const Reel2 = [
    "lemon",
    "apple",
    "lemon",
    "lemon",
    "cherry",
    "apple",
    "banana",
    "lemon",
  ];
  const Reel3 = [
    "lemon",
    "apple",
    "lemon",
    "apple",
    "cherry",
    "lemon",
    "banana",
    "lemon",
  ];

  const row1 = [
    Reel1[position1 % Reel1.length],
    Reel2[position2 % Reel2.length],
    Reel3[position3 % Reel3.length],
  ];
  const row2 = [
    Reel1[(position1 + 1) % Reel1.length],
    Reel2[(position2 + 1) % Reel2.length],
    Reel3[(position3 + 1) % Reel3.length],
  ];
  const row3 = [
    Reel1[(position1 + 2) % Reel1.length],
    Reel2[(position2 + 2) % Reel2.length],
    Reel3[(position3 + 2) % Reel3.length],
  ];

  function calculateRowWinnings(row) {
    const counts = {};
    for (const symbol of row) {
      counts[symbol] = (counts[symbol] || 0) + 1;
    }

    if (counts["cherry"] === 3) return 50;
    if (counts["cherry"] === 2) return 40;
    if (counts["apple"] === 3) return 20;
    if (counts["apple"] === 2) return 10;
    if (counts["banana"] === 3) return 15;
    if (counts["banana"] === 2) return 5;
    if (counts["lemon"] === 3) return 3;

    return 0;
  }

  // return total win (coins) and the slot machine
  const winningsRow1 = calculateRowWinnings(row1);
  const winningsRow2 = calculateRowWinnings(row2);
  const winningsRow3 = calculateRowWinnings(row3);
  const totalWinnings = winningsRow1 + winningsRow2 + winningsRow3;

  console.log("   Reel1       Reel2     Reel3");
  console.log("--------------------------------");
  console.log(`|  ${row1[0]}  |  ${row1[1]}  |  ${row1[2]}  |`);
  console.log(`|  ${row2[0]}  |  ${row2[1]}  |  ${row2[2]}  |`);
  console.log(`|  ${row3[0]}  |  ${row3[1]}  |  ${row3[2]}  |`);
  console.log("--------------------------------");
  console.log(
    `The machine shows in first Row (gives ${winningsRow1} coins), in second Row (gives ${winningsRow2} coins) and in third Row (gives ${winningsRow3} coins).`
  );
  console.log(`Total Win Amount is: ${totalWinnings} coins`);

  return totalWinnings;
}

calculateResult(0, 2, 7);

module.exports = calculateResult;

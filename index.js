function between(min, max) {
  let answer = Math.floor(
    Math.random() * (max - min) + min
  )
  return answer;
}

function codemaker() {
  let secretCode = [];
  for (let i = 0; i < 4; i += 1) {
    let answer = between(0, 6);
    secretCode.push(answer);
  }
  return secretCode;
}

let secretCode = codemaker()
console.log(secretCode)
const readline = require('readline-sync');

function guessAndCheck() {
  let blackpegs = 0
  let guess = readline.question(`What's your guess?`);

  console.log(`Your guess is ${guess}!`)
  //splits on spaces, guesses should look like:2 0 2 0.
  guess = guess.split(" ").map(num => {
    return parseInt(num)
  })

  for (let i = 0; i < 4; i += 1) {
    if (guess[i] == secretCode[i]) {
      blackpegs += 1
    }
  }
  console.log(`${blackpegs} black peg(s)`)

  return blackpegs === 4;
}

while(!guessAndCheck()) {}
console.log("you win!");
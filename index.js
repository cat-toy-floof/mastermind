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
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your guess?`, guess => {
  console.log(`Your guess is ${guess}!`)
  readline.close()
  guess = guess.split(" ").map(num => {
    return parseInt(num)
  })
  let blackpegs=0
  for (let i = 0; i < 4; i += 1) {
    if(guess[i] == secretCode[i]) {
      blackpegs += 1
    }
  }
  console.log(`${blackpegs} black pegs`)
})

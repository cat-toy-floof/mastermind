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
const assert = require("assert")

const balanced = ["([])[]()", "((([([])]))())"]
const notBalanced = ["([]]()", "][", "[[]]][[["]

const checkBalanced = str => {
  const stack = []
  const openings = ["(", "[", "{", "<"]
  const closings = [")", "]", "}", ">"]

  for (let i = 0; i < str.length; i++) {
    if (openings.indexOf(str[i]) !== -1) {
      stack.push(str[i])
    } else {
      if (stack.length === 0) return false

      const index = closings.indexOf(str[i])
      if (index === -1) return false

      if (stack.pop() !== openings[index]) {
        return false
      }
    }
  }

  if (stack.length === 0) return true
  return false
}

balanced.forEach(str => assert.strictEqual(checkBalanced(str), true))
notBalanced.forEach(str => assert.strictEqual(checkBalanced(str), false))

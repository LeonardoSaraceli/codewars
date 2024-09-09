// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const arr = str.trim().split('')
  const res = []

  for (let i = 0; arr.length; i++) {
    res.push(arr.splice(0, 2).join(''))
  }

  res.forEach((s) => {
    if (s.length === 1) {
      res.splice(res.length - 1, 1, s.concat('_'))
    }
  })

  return res
}

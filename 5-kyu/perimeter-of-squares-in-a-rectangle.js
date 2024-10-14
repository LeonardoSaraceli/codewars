// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

function perimeter(n) {
  if (!n) {
    return 4
  }

  const calc = n + 1
  const sequence = []

  for (let i = 1; i <= calc; i++) {
    if (sequence.length <= 1) {
      sequence.push(1)
    } else {
      const sum = sequence.slice(-2)
      let nextNum = 0
      sum.forEach((n) => (nextNum += n))
      sequence.push(nextNum)
    }
  }

  let res = 0
  sequence.forEach((num) => (res += num))
  return 4 * res
}

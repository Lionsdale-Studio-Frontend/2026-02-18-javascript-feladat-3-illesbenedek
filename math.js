function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value)
}






function add(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return null
  }
  return a + b
}







function subtract(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return null
  }
  return a - b
}







function multiply(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return null
  }
  return a * b
}







function divide(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return null
  }
  if (b === 0 && a===0) {
    return null
  }
  return a / b
}







function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }

  if (numbers.length === 0) {
    return 0
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      return null
    }
    
  }

  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}






function average(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }

  if (numbers.length === 0) {
    return null
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      return null
    }
  }

  return sumArray(numbers) / numbers.length
}








function max(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }

  if (numbers.length === 0) {
    return null
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      return null
    }
  }

  let maximum = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i]
    }
  }

  return maximum
}









function min(numbers) {
  if (!Array.isArray(numbers)) {
    return null
  }

  if (numbers.length === 0) {
    return null
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      return null
    }
  }

  let minimum = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i]
    }
  }

  return minimum
}







function isEven(number) {
  if (!isValidNumber(number)) {
    return null
  }

  if (!Number.isInteger(number)) {
    return null
  }

  return number % 2 === 0
}







function factorial(n) {
  if (!isValidNumber(n)) {
    return null
  }

  if (!Number.isInteger(n)) {
    return null
  }

  if (n < 0) {
    return null
  }

  if (n === 0) {
    return 1
  }

  let result = 1

  for (let i = 1; i <= n; i++) {
    result *= i
  }

  return result
}







module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}
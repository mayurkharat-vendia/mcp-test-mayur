/**
 * Divide two numbers
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} Result of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Safely divide two numbers with error handling
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number|null} Result of division or null if error
 */
function safeDivide(a, b) {
  try {
    return divide(a, b);
  } catch (error) {
    console.error('Division error:', error.message);
    return null;
  }
}

/**
 * Divide with remainder
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {Object} Object with quotient and remainder
 */
function divideWithRemainder(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return {
    quotient: Math.floor(a / b),
    remainder: a % b
  };
}

// Example usage
console.log('10 / 2 =', divide(10, 2));
console.log('15 / 4 =', divide(15, 4));
console.log('Safe divide 10 / 0 =', safeDivide(10, 0));
console.log('17 divided by 5:', divideWithRemainder(17, 5));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { divide, safeDivide, divideWithRemainder };
}

import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  const one = Big(numOne);
  const two = Big(numTwo);

  if (operation === '+') {
    return one.plus(two).toString(); // ADD
  }
  if (operation === '-') {
    return one.minus(two).toString(); // Subtract
  }
  if (operation === 'x') {
    return one.times(two).toString(); // Multiply
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString(); // Divide
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString(); // Percentange
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}

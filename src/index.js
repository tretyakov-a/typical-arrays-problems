const isArgumentValid = arg => arg !== undefined && arg.length > 0;

exports.min = function min (array) {
  if (!isArgumentValid(array))
    return 0;
  return array.reduce((minValue, el) => (
    minValue > el ? el : minValue
  ), array[0]);
}

exports.max = function max (array) {
  if (!isArgumentValid(array))
    return 0;
  return array.reduce((maxValue, el) => (
    maxValue < el ? el : maxValue
  ), array[0]);
}

exports.avg = function avg (array) {
  if (!isArgumentValid(array))
    return 0;
  const sum = array.reduce((sum, el) => sum + el, 0);
  return sum / array.length;
}

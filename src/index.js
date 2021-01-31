
exports.min = function min (array) {
  let res = 0;
  if (array == undefined || array.length == 0) return 0;
  array.sort(function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  res = array[0];
  return res;
}

exports.max = function max (array) {
  let res = 0;
  if (array == undefined || array.length == 0) return 0;
  array.sort(function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }).reverse();
  res = array[0];
  return res;
}

exports.avg = function avg (array) {
  let res = 0;
  if (array == undefined || array.length == 0) return 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  res = res / array.length;
  return res;
}

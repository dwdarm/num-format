'use strict';

var numFormat = function numFormat() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    format: {
      k: 'k',
      m: 'm',
      b: 'b'
    }
  };
  var format = options.format;
  var numArr = input.toString().split('');
  var numArrLen = numArr.length;

  if (numArrLen < 4) {
    return numArr.join('');
  } // thousand


  if (numArrLen > 3 && numArrLen < 7) {
    if (numArrLen < 5) {
      return numArr.slice(0, 1).join('') + '.' + numArr.slice(1, 2).join('') + format['k'];
    }

    return numArr.slice(0, numArrLen - 3).join('') + format['k'];
  } // million


  if (numArrLen > 6 && numArrLen < 10) {
    if (numArrLen < 8) {
      return numArr.slice(0, 1).join('') + '.' + numArr.slice(1, 2).join('') + format['m'];
    }

    return numArr.slice(0, numArrLen - 6).join('') + format['m'];
  } // billion


  if (numArrLen > 9 && numArrLen < 13) {
    if (numArrLen < 11) {
      return numArr.slice(0, 1).join('') + '.' + numArr.slice(1, 2).join('') + format['b'];
    }

    return numArr.slice(0, numArrLen - 9).join('') + format['b'];
  }
};

(function () {
  if (typeof module !== null && module.exports) {
    module.exports = numFormat;
  } else {
    this.numFormat = numFormat;
  }
}).call(void 0);
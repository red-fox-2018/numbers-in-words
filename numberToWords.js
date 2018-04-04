var str = [
           [1, 'satu'], [2, 'dua'], [3, 'tiga'], [4, 'empat'], [5, 'lima'],
           [6, 'enam'], [7, 'tujuh'], [8, 'delapan'], [9, 'sembilan']
          ];
var satuan = [['', 1], ['puluh', 10], ['ratus', 100]]

function in_words(number) {
  number = number.toString();
  var arr = [];
  while (number.length !== 0) {
    arr.unshift(number.slice(-3));
    number = number.substr(0, number.length - 3);
  }
  if (arr.length === 1) {
    return hundredsNum(arr[0]);
  } else if (arr.length === 2) {
    if (arr[0] == 1) {
      return 'seribu ' + hundredsNum(arr[1]);
    } else {
      return hundredsNum(Number(arr[0])) + 'ribu ' + in_words(Number(arr[1]));
    }
  } else {
    var hundreds = arr.shift();
    var arr = arr.join('');
    // (hundreds) ; (arr) --> 000 || 000000 ...
    if (arr.length === 6) {
      return hundredsNum(Number(hundreds)) + 'juta ' + in_words(Number(arr));
    } else if (arr.length === 9) {
      return hundredsNum(Number(hundreds)) + 'milyar ' + in_words(Number(arr));
    } else if (arr.length === 12) {
      return hundredsNum(Number(hundreds)) + 'triliun ' + in_words(Number(arr));
    }
  }
}

function hundredsNum(num) {
  if (num === 0) {
    return '';
  } else {
    for (var i = str.length - 1; i >= 0; i--) {
      for (var j = satuan.length - 1; j >= 0; j--) {
        var first = num.toString().charAt(0);
        num = parseInt(num);
        var tempDiv = num / (str[i][0] * satuan[j][1]);
        if (tempDiv >= 1 && first == str[i][0]) {
          if (num == 11) {
            return 'sebelas' + ' ';
          } else if (num > 11 && num < 20) {
            for (var k = 0; k < str.length; k++) {
              if (str[k][0] == num.toString().charAt(1)) { //bedanya dg var first --> yg dicari index ke 1 bukan 0
                return str[k][1] + ' belas' + ' ';
              }
            }
          }
          var newInt = num % (str[i][0] * satuan[j][1]);
          if (str[i][0] * satuan[j][1] === 10 || str[i][0] * satuan[j][1] === 100) {
            return 'se' + satuan[j][0] + ' ' + hundredsNum(newInt);
          } else if (satuan[j][0].length === 0) {         //supaya tidak double spasi saat satuan == 1
            return str[i][1] + ' '
          } else {
            return str[i][1] + ' ' + satuan[j][0] + ' ' + hundredsNum(newInt);
          }
        }
      }
    }
  }
}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(1111));
console.log(in_words(38079));
console.log(in_words(82102713))
console.log(in_words(11112113114));
console.log(in_words(1234567890123));

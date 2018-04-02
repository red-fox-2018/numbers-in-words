function in_words(number) {
  var str = [
             [1, 'satu'], [2, 'dua'], [3, 'tiga'], [4, 'empat'], [5, 'lima'],
             [6, 'enam'], [7, 'tujuh'], [8, 'delapan'], [9, 'sembilan']
            ];
  var satuan = [
                ['', 1],
                ['puluh', 10],
                ['ratus', 100],
               ]
  number = number.toString();
  var arr = [];
  while (number.length !== 0) {
    arr.unshift(number.slice(-3));
    number = number.substr(0, number.length - 3);
  }
  console.log(arr);
  if (arr.length === 1 && arr[0] == 0) {
    return '';
  } else if (arr.length === 2) {
    if (arr[0] == 1) {
      return 'seribu ' + in_words(Number(arr[1]));
    } else {
      return in_words(Number(arr[0])) + 'ribu ' + in_words(Number(arr[1]));
    }
  } else if (arr.length === 3) {
    var jutaan = arr.shift();
    var arr = arr.join('');
    return in_words(Number(jutaan)) + 'juta ' + in_words(Number(arr));
  } else if (arr.length === 4) {
    var milyar = arr.shift();
    var arr = arr.join('');
    return in_words(Number(milyar)) + 'milyar ' + in_words(Number(arr));
  } else if (arr.length === 5) {
    var triliun = arr.shift();
    var arr = arr.join('');
    return in_words(Number(triliun)) + 'triliun ' + in_words(Number(arr));
  } else {
    for (var i = str.length - 1; i >= 0; i--) {
      for (var j = satuan.length - 1; j >= 0; j--) {
        var first = arr[0].toString().charAt(0);
        arr[0] = parseInt(arr[0]);
        var tempDiv = arr[0] / (str[i][0] * satuan[j][1]);
        var tempMod = arr[0] % (str[i][0] * satuan[j][1])
        if (tempDiv >= 1 && first == str[i][0]) {
          if (arr[0] == 11) {
            return 'sebelas' + in_words(arr[0] % 11) + ' ';
          } else if (arr[0] > 11 && arr[0] < 20) {
            for (var k = 0; k < str.length; k++) {
              if (str[k][0] == arr[0].toString().charAt(1)) {
                return str[k][1] + ' belas' + in_words(0) + ' ';
              }
            }
            return arr[0].toString().charAt(1) + ' belas' + in_words(0) + ' ';
          }
          // arr[0] = arr[0] % (str[i][0] * satuan[j][1]);
          var newInt = arr[0] % (str[i][0] * satuan[j][1]);
          if (str[i][0] * satuan[j][1] === 10 || str[i][0] * satuan[j][1] === 100) {
            return 'se' + satuan[j][0] + ' ' + in_words(newInt);
          } else if (satuan[j][0].length === 0) {
            return str[i][1] + ' ' + in_words(newInt);
          } else {
            console.log('perratusan ' + newInt);
            return str[i][1] + ' ' + satuan[j][0] + ' ' + in_words(newInt);
          }
          // number = number % (str[i][0] * satuan[j][1]);
        }
      }
    }
  }
}

// console.log(in_words(4));
// console.log(in_words(27));
// console.log(in_words(102));
// console.log(in_words(1111));
// console.log(in_words(38079));
// console.log(in_words(82102713))
console.log(in_words(11112113114));
// console.log(in_words(1234567890123));

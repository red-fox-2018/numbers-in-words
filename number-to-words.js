function toWords(num) {
  let specialNum = [
    {
      number: 1,
      words: 'satu'
    }, {
      number: 2,
      words: 'dua'
    }, {
      number: 3,
      words: 'tiga'
    }, {
      number: 4,
      words: 'empat'
    }, {
      number: 5,
      words: 'lima'
    }, {
      number: 6,
      words: 'enam'
    }, {
      number: 7,
      words: 'tujuh'
    }, {
      number: 8,
      words: 'delapan'
    }, {
      number: 9,
      words: 'sembilan'
    }, {
      number: 10,
      words: 'sepuluh'
    }, {
      number: 11,
      words: 'sebelas'
    }, {
      number: 12,
      words: 'dua belas'
    }, {
      number: 13,
      words: 'tiga belas'
    }, {
      number: 14,
      words: 'empat belas'
    }, {
      number: 15,
      words: 'lima belas'
    }, {
      number: 16,
      words: 'enam belas'
    }, {
      number: 17,
      words: 'tujuh belas'
    }, {
      number: 18,
      words: 'delapan belas'
    }, {
      number: 19,
      words: 'sembilan belas'
    }
  ]

  var numStr = num.toString()
  var str = ''
  var sisa;

  if(numStr.length === 0) {
    return str;
  }

  for(var i = 0; i < specialNum.length; i++) {

    if(num == specialNum[i].number) {
      return specialNum[i].words
    }

    if(numStr.length == 2) {
      if(parseInt(numStr[0]) === specialNum[i].number) {
        str += specialNum[i].words + ' puluh '
        sisa = num % 10
        return str + toWords(sisa)
      }
    }

    if(numStr.length == 3) {
      if(parseInt(numStr[0]) === 1) {
        str += 'seratus '
        sisa = num % 100
        return str + toWords(sisa)
      } else if(parseInt(numStr[0]) === specialNum[i].number){
        str += specialNum[i].words + ' ratus '
        sisa = num % 100
        return str + toWords(sisa)
      }
    }
  }
}

console.log(toWords(999));

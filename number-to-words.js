function toWords(num) {
  let specialNum = [
    {
      number: 0,
      words: ''
    },
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
  var angkaDepan;
  var sisa;

  if(numStr.length == 0) {
    return '';
  }

  for(var i = 0; i < specialNum.length; i++) {

    if(num == specialNum[i].number) {
      return specialNum[i].words
    }

    if(numStr.length == 2 && numStr[0] != 1) {
      angkaDepan = Math.floor(num / 10)
      sisa = num % 10
      return toWords(angkaDepan) + ' puluh ' + toWords(sisa)
    }

    if(numStr.length == 3) {
      angkaDepan = Math.floor(num / 100)
      sisa = num % 100
      if(angkaDepan == 1) {
        return 'seratus ' + toWords(sisa)
      }
      return toWords(angkaDepan) + ' ratus ' + toWords(sisa)
    }

    if(numStr.length >= 4  && numStr.length <= 6) {
      angkaDepan = Math.floor(num / 1000)
      sisa = num % 1000
      if(angkaDepan == 1) {
        return 'seribu ' + toWords(sisa)
      }
      return toWords(angkaDepan) + ' ribu ' + toWords(sisa)
    }

    if(numStr.length >= 7 && numStr.length <= 9) {
      angkaDepan = Math.floor(num / 1000000)
      sisa = num % 1000000
      return toWords(angkaDepan) + ' juta ' + toWords(sisa)
    }

    if(numStr.length >= 10 && numStr.length <= 12) {
      angkaDepan = Math.floor(num / 1000000000)
      sisa = num % 1000000000
      return toWords(angkaDepan) + ' milyar ' + toWords(sisa)
    }

    if(numStr.length >= 13 && numStr.length <= 15) {
      angkaDepan = Math.floor(num / 1000000000000)
      sisa = num % 1000000000000
      return toWords(angkaDepan) + ' triliun ' + toWords(sisa)
    }
  }
}

console.log(toWords(1230000000543));

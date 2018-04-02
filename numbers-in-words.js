function in_words(num) {

  const low_number = [
    {angka: 1, words: 'satu'},{angka: 2, words: 'dua'},{angka: 3,words: 'tiga'},
    {angka: 4, words: 'empat'},{angka: 5, words: 'lima'},{angka: 6,words: 'enam'},
    {angka: 7, words: 'tujuh'},{angka: 8, words: 'delapan'},{angka: 9,words: 'sembilan'},
    {angka: 10, words: 'sepuluh'}
  ]

  if (num == 000) {

    return ``

  }

  if (num <= 10) {

    for (var i = 0; i < low_number.length; i++) {

      if (num == low_number[i].angka) {

        return low_number[i].words

      }

    }

  }

  if (num < 20 && num > 10) {

    if (num == 11) {

      return 'sebelas'

    } else {

      for (var i = 0; i < low_number.length; i++) {

        if (+(String(num)[1]) == low_number[i].angka) {

          return `${low_number[i].words} belas`

        }

      }

    }

  }

  if (String(num).length == 2) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${low_number[i].words} puluh ` + in_words(+(String(num).slice(1)))

      }

    }

  }

  if (String(num).length == 3) {

    if (num == 100) {

      return `seratus`

    } else {

      for (var i = 0; i < low_number.length; i++) {

        if (+(String(num)[0]) == low_number[i].angka) {

          if (+(String(num)[0]) == 1) {

            return `seratus ` + in_words(+(String(num).slice(1)))

          }

          return `${low_number[i].words} ratus ` + in_words(+(String(num).slice(1)))

        }

      }

    }

  }

  if (String(num).length == 4) {

    if (num == 1000) {

      return `seribu`

    } else {

      for (var i = 0; i < low_number.length; i++) {

        if (+(String(num)[0]) == low_number[i].angka) {

          if (+(String(num)[0]) == 1) {

            return `seribu ` + in_words(+(String(num).slice(1)))

          }

          return `${low_number[i].words} ribu ` + in_words(+(String(num).slice(1)))

        }

      }

    }

  }

  if (String(num).length == 5) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 2)))} ribu ` + in_words(+(String(num).slice(2)))

      }

    }

  }

  if (String(num).length == 6) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 3)))} ribu ${in_words(+(String(num).slice(3)))}`

      }

    }

  }

  if (String(num).length == 7) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num)[0]))} juta ${in_words(+(String(num).slice(1)))}`

      }

    }

  }

  if (String(num).length == 8) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 2)))} juta ${in_words(+(String(num).slice(2)))}`

      }

    }

  }

  if (String(num).length == 9) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 3)))} juta ${in_words(+(String(num).slice(3)))}`

      }

    }

  }

  if (String(num).length == 10) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num)[0]))} milyar ${in_words(+(String(num).slice(1)))}`

      }

    }

  }

  if (String(num).length == 11) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 2)))} milyar ${in_words(+(String(num).slice(2)))}`

      }

    }

  }

  if (String(num).length == 12) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0, 3)))} milyar ${in_words(+(String(num).slice(3)))}`

      }

    }

  }

  if (String(num).length == 13) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num)[0]))} trilyun ${in_words(+(String(num).slice(1)))}`

      }

    }

  }

  if (String(num).length == 14) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0,2)))} trilyun ${in_words(+(String(num).slice(2)))}`

      }

    }

  }

  if (String(num).length == 15) {

    for (var i = 0; i < low_number.length; i++) {

      if (+(String(num)[0]) == low_number[i].angka) {

        return `${in_words(+(String(num).slice(0,3)))} trilyun ${in_words(+(String(num).slice(3)))}`

      }

    }

  }

}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38000));
console.log(in_words(82102713));

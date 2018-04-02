function in_words(number) {
  var word = ['','satu', 'dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']

  if (number < 10 ) {
    return word[number]
  }

  if (number >= 10 && number < 100) {
    if (number >= 11 && number < 20) {
      var digitBelakang = number % 10
      if(number === 11){
        return 'sebelas'
      }
      return in_words(digitBelakang) + ' belas '
    }
    var digitDepan = Math.floor(number / 10)
    var digitBelakang = number % 10
    if (number === 10) {
      return 'sepuluh'
    }
    return in_words(digitDepan) +' puluh '+ in_words(digitBelakang)
  }

  else if (number >= 100 && number < 1000) {
    var digitDepan = Math.floor(number / 100)
    var digitBelakang = number % 100
    if (digitDepan === 1) {
      return 'seratus ' + in_words(digitBelakang)
    }
    return in_words(digitDepan) +' ratus '+ in_words(digitBelakang)
  }

  else if (number >= 1000 && number < 100000) {
    var digitDepan = Math.floor(number / 1000)
    var digitBelakang = number % 1000
    if (digitDepan === 1) {
      return 'seribu ' + in_words(digitBelakang)
    }
    return in_words(digitDepan) +' ribu '+ in_words(digitBelakang)
  }

  else if (number >= 100000 && number < 1000000) {
    var digitDepan = Math.floor(number / 100000)
    var digitBelakang = number % 100000
    if (digitDepan === 1) {
      if(Number(String(number)[1]) === 0 && Number(String(number)[2]) === 0){
        return 'seratus ribu ' + in_words(digitBelakang)
      }
      return 'seratus ' + in_words(digitBelakang)
    }
    return in_words(digitDepan) +' seratus '+ in_words(digitBelakang)
  }

  else if (number >= 1000000 && number < 1000000000) {
    var digitDepan = Math.floor(number / 1000000)
    var digitBelakang = number % 1000000
    return in_words(digitDepan) +' juta '+ in_words(digitBelakang)
  }

  else if (number >= 1000000000 && number < 1000000000000) {
    var digitDepan = Math.floor(number / 1000000000)
    var digitBelakang = number % 1000000000
    return in_words(digitDepan) +' milyar '+ in_words(digitBelakang)
  }

  else if (number >= 1000000000000 && number < 1000000000000000) {
    var digitDepan = Math.floor(number / 1000000000000)
    var digitBelakang = number % 1000000000000
    return in_words(digitDepan) +' triliyun '+ in_words(digitBelakang)
  }

  else if (number >= 1000000000000000) {
    return 'out of range'
  }
}
console.log(in_words(111010));
console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102002));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999000000000000));

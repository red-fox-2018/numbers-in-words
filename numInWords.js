function in_words(number){
  if (number == 0) {
    return ''
  } else {
    const bilangan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
    let result = ''
    if (number < 10) {
      return bilangan[number]
    } else if (number >= 10 && number < 100) {
      if (number == 10) {
        return 'sepuluh'
      } else if (number == 11) {
        return 'sebelas'
      } else if (number > 11 && number < 20) {
        let digitBelakang = number % 10
        return bilangan[digitBelakang] + ' belas'
      } else {
        return bilangan[Math.floor(number / 10)] + ' puluh ' + bilangan[number % 10]
      }
    } else if (number >= 100 && number < 200) {
      return 'seratus ' + in_words(number - 100)
    } else if (number >= 200 && number < 1000) {
      return bilangan[Math.floor(number / 100)] + ' ratus ' + in_words(number - (Math.floor(number / 100) * 100))
    } else if (number >= 1000 && number < 2000 ) {
      return 'seribu ' + in_words(number - 1000)
    } else if (number >= 2000 && number < 10000) {
      return bilangan[Math.floor(number / 1000)] + ' ribu ' + in_words(number - (Math.floor(number / 1000) * 1000))
    } else if (number >= 10000 && number < 1000000) {
      return in_words(Math.floor(number / 1000)) + ' ribu ' + in_words(number - (Math.floor(number / 1000) * 1000))
    } else if (number >= 1000000 && number < 1000000000) {
      return in_words(Math.floor(number / 1000000)) + ' juta ' + in_words(number - (Math.floor(number / 1000000) * 1000000))
    } else if (number >= 1000000000 && number < 1000000000000) {
      return in_words(Math.floor(number / 1000000000)) + ' miliar ' + in_words(number - (Math.floor(number / 1000000000) * 1000000000))
    } else if (number >= 1000000000000 && number < 1000000000000000) {
      return in_words(Math.floor(number / 1000000000000)) + ' triliun ' + in_words(number - (Math.floor(number / 1000000000000) * 1000000000000))
    }
  }
}

console.log(in_words(999999999999999));

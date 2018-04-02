function in_words(number) {

  function satuan(number){
    let words  = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
    let satuan = ''
    for(let i = 1; i <= 10; i++){
      if(number == i){
        satuan = words[i-1];
      }
    }
    return satuan
  }

  function belasan(number) {
    let sisa = number % 10;
    if(sisa == 1) {
      return 'sebelas'
    } else {
      return satuan(sisa) +' belas'
    }
  }

  function puluhan(number) {
    let depan = Math.floor(number/10)
    let sisa = number % 10;
    return satuan(depan) + ' puluh ' + in_words(sisa)
  }

  function ratusan(number) {
    let depan = Math.floor(number/100)
    let sisa = number % 100;

    if(depan == 1) {
      return 'seratus ' + in_words(sisa);
    } else {
      return satuan(depan) + ' ratus ' + in_words(sisa);
    }
  }

  function ribuan(number) {
    let depan = Math.floor(number/1000);
    let sisa = number % 1000;

    if(depan == 1) {
      return 'seribu ' + in_words(sisa);
    } else {
      return in_words(depan) + ' ribu ' + in_words(sisa);
    }
  }

  function jutaan(number) {
    let depan = Math.floor(number/1000000)
    let sisa = number % 1000000
    return in_words(depan) + ' juta ' + in_words(sisa)
  }

  function milyar(number) {
    let depan = Math.floor(number/1000000000)
    let sisa = number % 1000000000
    return in_words(depan) + ' milyar ' + in_words(sisa)
  }

  function triliun(number) {
    let depan = Math.floor(number/1000000000000)
    let sisa = number % 1000000000000
    return in_words(depan) + ' triliun ' + in_words(sisa)
  }


  if(number < 11) {
    return satuan(number)
  } else {
    if(number < 20) {
      return belasan(number)
    }
    if(number < 100) {
      return puluhan(number)
    }
    if(number < 1000){
      return ratusan(number)
    }
    if(number < 1000000){
      return ribuan(number)
    }
    if(number < 1000000000) {
      return jutaan(number)
    }
    if(number < 1000000000000){
      return milyar(number)
    }
    if(number < 1000000000000000){
      return triliun(number)
    }
  }

}

console.log(in_words(999999999999999));

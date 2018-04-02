/*jshint esversion:6*/

function in_words(number) {

  let numberString = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  let numberDecimal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numberOneDigit = '';
  let sisaPuluh = number % 10;
  let puluhan = Math.floor(number / 10);
  let ratusan = Math.floor(number / 100);
  let sisaRatus = number % 100;
  let ribuan = Math.floor(number / 1000);
  let sisaRibu = number % 1000;
  let jutaan = Math.floor(number / 1000000);
  let sisaJuta = number % 1000000;
  let milyar = Math.floor(number / 1000000000);
  let sisaMilyar = number % 1000000000;
  let trilyun = Math.floor(number / 1000000000000);
  let sisaTrilyun = number % 1000000000000;

  // =========angka satuan=========
  if (number < 10) {
    for (let i = 0; i < numberDecimal.length; i++) {
      if (number < 1) {
        return numberOneDigit;
      }
      if (number <= numberDecimal[i]) {
        numberOneDigit = numberString[i];
        return numberOneDigit + in_words(number - numberDecimal[i]);
      }
    }
  }

  //=========angka belasan=========
  if (number > 9 && number < 20) {
    if (number == 10) {
      return `sepuluh`;
    }
    if (number == 11) {
      return `sebelas`;
    } else {
      return in_words(sisaPuluh) + ` belas`;
    }
  }

  // =========angka puluhan=========
  if (number > 19 && number < 100) {
    return in_words(puluhan) + ` puluh ` + in_words(sisaPuluh);
  }

  // =========angka ratusan sampe ribuan=========
  if (number > 99 && number < 1000) {
    if (ratusan == 1) {
      return `seratus ` + in_words(sisaRatus);
    } else {
      return in_words(ratusan) + ` ratus ` + in_words(sisaRatus);
    }
  }

  // =========angka ribuan sampe jutaan=========
  if (number > 999 && number < 1000000) {
    if (ribuan == 1) {
      return `seribu ` + in_words(sisaRibu);
    } else {
      return in_words(ribuan) + ` ribu ` + in_words(sisaRibu);
    }
  }

  // =========ratusan juta sampe milyaran=========
  if (number > 999999 && number < 1000000000) {
    return in_words(jutaan) + ` juta ` + in_words(sisaJuta);
  }

  // =========angka ratusan milyar sampe ribuan milyaran =========
  if (number > 999999999 && number < 1000000000000) {
    return in_words(milyar) + ` milyar ` + in_words(sisaMilyar);
  }

  // =========angka triliunan=========
  if (number > 999999999999 && number < 1000000000000000) {
    return in_words(trilyun) + ` trilyun ` + in_words(sisaTrilyun);
  }

  //=========angka lebih dari 1000 triliunan=========
  if (String(number).length >= 15) {
    return `lebih dari seribu trilyun`;
  }
}


// Driver code
console.log(in_words(1));
console.log(in_words(9));
console.log(in_words(13));
console.log(in_words(19));
console.log(in_words(21));
console.log(in_words(41));
console.log(in_words(99));
console.log(in_words(101));
console.log(in_words(111));
console.log(in_words(999));
console.log(in_words(1001));
console.log(in_words(1111));
console.log(in_words(99999));
console.log(in_words(999999));
console.log(in_words(9999999));
console.log(in_words(99999999));
console.log(in_words(999999999));
console.log(in_words(9999999999));
console.log(in_words(99999999999));
console.log(in_words(999999999999));
console.log(in_words(9999999999999));
console.log(in_words(99999999999999));
console.log(in_words(999999999999999));
console.log(in_words(9999999999999999));

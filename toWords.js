/* jshint esversion:6*/

function numberInWords(num) {
  var angka = [11,10,9, 8, 7, 6, 5, 4, 3, 2, 1];
  var huruf = ['sebelas','sepuluh','sembilan', 'delapan', 'tujuh', 'enam', 'lima', 'empat', 'tiga', 'dua', 'satu'];

  if (num < 12) {
    for (var i = 0; i < angka.length; i++) {
      var hasil = '';
      if (num < 1) {
        return hasil;
      }
      if (num >= angka[i]) {
        hasil = huruf[i];
        return hasil + numberInWords(num - angka[i]);
      }
    }
  }

  if (num >= 12 && num < 20) {
    let angkaDepan = Math.floor(num / 10);
    let angkaBelakang = num % 10;
    return numberInWords(angkaBelakang) + " belas ";
  }

  if (num > 21 && num <= 99) {
    let angkaDepan = Math.floor(num / 10);
    let angkaBelakang = num % 10;
    return numberInWords(angkaDepan) + " puluh " + numberInWords(angkaBelakang);
  }

  if (num > 100 && num <= 199) {
    let angkaDepan = Math.floor(num / 100);
    let angkaBelakang = num % 100;
    return 'seratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 200 && num < 1000) {
    let angkaDepan = Math.floor(num / 100);
    let angkaBelakang = num % 100;
    return numberInWords(angkaDepan)+ ' ratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 1000 && num < 2000) {
    let angkaDepan = Math.floor(num / 1000);
    let angkaBelakang = num % 1000;
    return 'seribu ' + numberInWords(angkaBelakang);
  }

  if (num >= 2000 && num < 10000) {
    let angkaDepan = Math.floor(num / 1000);
    let angkaBelakang = num % 1000;
    return numberInWords(angkaDepan)+ ' ribu ' + numberInWords(angkaBelakang);
  }

  if (num >= 10000 && num < 100000) {
    let angkaDepan = Math.floor(num / 1000);
    let angkaBelakang = num % 1000;
    return numberInWords(angkaDepan)+ ' ribu ' + numberInWords(angkaBelakang);
  }

  if (num >= 100000 && num < 200000) {
    let angkaBelakang = num % 100000;
    return 'seratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 200000 && num < 1000000) {
    let angkaDepan = Math.floor(num / 100000);
    let angkaBelakang = num % 100000;
    return numberInWords(angkaDepan) + ' ratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 1000000 && num < 100000000) {
    let angkaDepan = Math.floor(num / 1000000);
    let angkaBelakang = num % 1000000;
    return numberInWords(angkaDepan) + ' juta ' + numberInWords(angkaBelakang);
  }

  if (num >= 10000000 && num < 200000000) {
    let angkaBelakang = num % 100000000;
    return 'seratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 20000000 && num < 1000000000) {
    let angkaDepan = Math.floor(num / 1000000);
    let angkaBelakang = num % 1000000;
    return numberInWords(angkaDepan) + ' juta ' + numberInWords(angkaBelakang);
  }

  if (num >= 1000000000 && num < 100000000000) {
    let angkaDepan = Math.floor(num / 1000000000);
    let angkaBelakang = num % 1000000000;
    return numberInWords(angkaDepan) + ' milyar ' + numberInWords(angkaBelakang);
  }

  if (num >= 100000000000 && num < 200000000000) {
    let angkaBelakang = num % 100000000000;
    return 'seratus ' + numberInWords(angkaBelakang);
  }

  if (num >= 200000000000 && num < 1000000000000) {
    let angkaDepan = Math.floor(num / 1000000000);
    let angkaBelakang = num % 100000000;
    return numberInWords(angkaDepan) + ' milyar ' + numberInWords(angkaBelakang);
  }

  if (num >= 1000000000000 && num < 1000000000000000) {
    let angkaDepan = Math.floor(num / 10000000000);
    let angkaBelakang = num % 1000000000000;
    return numberInWords(angkaDepan) + ' triliyun ' + numberInWords(angkaBelakang);
  }

  if (num >= 10000000000000 ) {
    return 'MAU KAYA MAH KERJA BANG BUKAN ITUNGIN GINIAN!!!';
  }

}

console.log(numberInWords(99329999));
console.log(numberInWords(2653830));
console.log(numberInWords(1939599699799));

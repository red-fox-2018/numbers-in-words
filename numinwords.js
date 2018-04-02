
function in_words(num) {
  console.log(num);
  let specialNum =
    {
      '': 0,
      'satu':1,
      'dua':2,
      'tiga':3,
      'empat':4,
      'lima':5,
      'enam':6,
      'tujuh':7,
      'delapan':8,
      'sembilan':9,
      'sepuluh':10,
      'sebelas':11,
      'dua belas':12,
      'tiga belas':13,
      'empat belas':14,
      'lima belas':15,
      'enam belas':16,
      'tujuh belas':17,
      "delapan belas":18,
      'sembilan belas':19
    }



  let numStr = num.toString()
  let angkaDepan;
  let sisa;

    if(numStr.length == 0) {
      return '';
    }


    if(numStr.length == 2 && numStr[0] != 1) {
      angkaDepan = Math.floor(num / 10)
      sisa = num % 10
      console.log(`angkaDepan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' puluh ' + in_words(sisa)
    }


    if(numStr.length == 3) {
      angkaDepan = Math.floor(num / 100)
      sisa = num % 100
      if(angkaDepan == 1) {
        return 'seratus ' + in_words(sisa)
      }
      console.log(`angka Depan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' ratus ' + in_words(sisa)
    }


    if(numStr.length >= 4  && numStr.length <= 6) {
      angkaDepan = Math.floor(num / 1000)
      sisa = num % 1000
      if(angkaDepan == 1) {
        return 'seribu ' + in_words(sisa)
      }
      console.log(`angka Depan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' ribu ' + in_words(sisa)
    }


    if(numStr.length >= 7 && numStr.length <= 9) {
      angkaDepan = Math.floor(num / 1000000)
      sisa = num % 1000000
      console.log(`angka Depan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' juta ' + in_words(sisa)
    }


    if(numStr.length >= 10 && numStr.length <= 12) {
      angkaDepan = Math.floor(num / 1000000000)
      sisa = num % 1000000000
      console.log(`angka Depan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' milyar ' + in_words(sisa)
    }


    if(numStr.length >= 13 && numStr.length <= 15) {
      angkaDepan = Math.floor(num / 1000000000000)
      sisa = num % 1000000000000
      console.log(`angka Depan ${angkaDepan} sisa ${sisa}`);
      return in_words(angkaDepan) + ' triliun ' + in_words(sisa)
    }

    for(var angka in specialNum ) {
      if(num == specialNum[angka]) {
        console.log(`satuan dan belasan ${angka}`);
        return angka
    }
  }
}
// console.log(in_words(13));
 // console.log(in_words(27));
 // console.log(in_words(212));
// console.log(in_words(38079));
 console.log(in_words(82102713));
// console.log(in_words(107230076000519));
